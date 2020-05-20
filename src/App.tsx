import React, { useState, useEffect, useMemo } from 'react';
import './App.scss';
import './styles/digital/numbers.scss';

import DigitalNumberBase from './DigitalNumberBase';
import DigitalSeparator from './DigitalSeparator';

type DigitalComponents = {
    [key: string]: string;
}

const getDigitalComponent = (num: string) => {
    const digitalComponents: DigitalComponents = {
        "0": 'zero',
        "1": 'one',
        "2": 'two',
        "3": 'three',
        "4": 'four',
        "5": 'five',
        "6": 'six',
        "7": 'seven',
        "8": 'eight',
        "9": 'nine',
    };
    return digitalComponents[num];
}


// toggle will be handled with useState
// Part 1: Digital Clock
/*
 * Successes: 
 * Basic digital clock runs
 * Create css to display a digital one
 * 
 * PART 2: ANALOG CLOCK
 */

 const zeroPrepender = (timeUnit: number) => {
    if (timeUnit < 10) {
        return `0${timeUnit}`.split('');
    }

    return `${timeUnit}`.split('');
};

const ClockIndex = () => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const { hours, minutes, seconds } = time;

    const memoizedHours = useMemo(() => {
        return zeroPrepender(hours);
    }, [hours]);

    const memoizedMinutes = useMemo(() => {
        return zeroPrepender(minutes);
    }, [minutes]);;

    const zeroedSeconds = zeroPrepender(seconds);

    const intervalInitiatiors = () => {
        setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            setTime({ hours, minutes, seconds });
        }, 1000)
    }

    useEffect(() => {
        const initiateInterval = () => {
            intervalInitiatiors();
        }
        initiateInterval();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div className='digital-wrapper'>
                    <div style={{ display: 'flex', height: '100%' }}>
                        { memoizedHours.map((el) => {
                            const num = getDigitalComponent(el);
                            return <DigitalNumberBase className={`digital-${num}`} />
                        })}
                        <DigitalSeparator />
                        { memoizedMinutes.map((el) => {
                            const num = getDigitalComponent(el);
                            return <DigitalNumberBase className={`digital-${num}`} />
                        })}
                        <DigitalSeparator />
                        { zeroedSeconds.map((el) => {
                            const num = getDigitalComponent(el);
                            return <DigitalNumberBase className={`digital-${num}`} />
                        })}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default ClockIndex;

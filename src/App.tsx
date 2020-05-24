import React, { useState, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import './App.scss';
import './styles/digital/numbers.scss';

import DigitalNumberBase from './DigitalNumberBase';
import DigitalSeparator from './DigitalSeparator';

type DigitalClassName = {
    [key: string]: string;
}

const getDigitalClassName = (num: string) => {
    const digitalClassName: DigitalClassName = {
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
    return digitalClassName[num];
}

 const zeroPrepender = (timeUnit: number) => {
    if (timeUnit < 10) {
        return `0${timeUnit}`.split('');
    }

    return `${timeUnit}`.split('');
};

const STYLE_TWENTY_FOUR = '24';
const STYLE_TWELVE = '12';

const COLOR_RED = 'red';
const COLOR_GREEN = 'green';
const COLOR_CYAN = 'cyan';

type COLOR_THEMES = typeof COLOR_RED | typeof COLOR_GREEN | typeof COLOR_CYAN;

type Props = {
    style?: typeof STYLE_TWENTY_FOUR | typeof STYLE_TWELVE;
    color?: COLOR_THEMES;
};

const ClockIndex = ({ style = '24', color = 'cyan' }: Props) => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const { hours, minutes, seconds } = time;

    const memoizedHours = useMemo(() => {
        if (style === STYLE_TWELVE && hours > 12) {
            return zeroPrepender(hours - 12)
        }

        return zeroPrepender(hours);
    }, [hours, style]);

    const memoizedMinutes = useMemo(() => {
        return zeroPrepender(minutes);
    }, [minutes]);

    const zeroedSeconds = zeroPrepender(seconds);

    const meridiem = useMemo(() => {
        if (style === STYLE_TWENTY_FOUR) return null;
        
        if (hours < 12) {
            return 'am';
        }

        return 'pm';
    }, [hours, style]);

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
        document.documentElement.setAttribute("data-theme", color);
    }, [color]);

    return (
        <div className="App">
            <header className="App-header">
                <div className='digital-wrapper'>

                        <div className='meridian-wrap'>
                            <div className={classnames('am', {active: meridiem === 'am' })}>
                                AM
                            </div>
                            <div className={classnames('pm', {active: meridiem === 'pm' })}>
                                PM
                            </div>
                        </div>

                        { memoizedHours.map((el) => {
                            const num = getDigitalClassName(el);
                            return <DigitalNumberBase className={`digital-${num}`} />
                        })}
                        <DigitalSeparator />
                        { memoizedMinutes.map((el) => {
                            const num = getDigitalClassName(el);
                            return <DigitalNumberBase className={`digital-${num}`} />
                        })}
                        <DigitalSeparator />
                        { zeroedSeconds.map((el) => {
                            const num = getDigitalClassName(el);
                            return <DigitalNumberBase className={`digital-${num}`} />
                        })}
                    
                </div>
            </header>
        </div>
    );
}

export default ClockIndex;

import React, { useState, useEffect, useMemo, memo } from 'react';
import './App.scss';
import './styles/digital/numbers.scss';
import Zero from './DigitalNumbers/Zero'
import One from './DigitalNumbers/One'
import Two from './DigitalNumbers/Two'
import Three from './DigitalNumbers/Three'
import Four from './DigitalNumbers/Four'
import Five from './DigitalNumbers/Five'
import Six from './DigitalNumbers/Six'
import Seven from './DigitalNumbers/Seven'
import Eight from './DigitalNumbers/Eight'
import Nine from './DigitalNumbers/Nine'

import DigitalNumberBase from './DigitalNumberBase';

type DigitalComponents = {
    [key: string]: JSX.Element;
}

const getDigitalComponent = (num: string) => {
    const digitalComponents: any = {
        "0": Zero,
        "1": One,
        "2": Two,
        "3": Three,
        "4": Four,
        "5": Five,
        "6": Six,
        "7": Seven,
        "8": Eight,
        "9": Nine,
    };
    return digitalComponents[num];
}


// toggle will be handled with useState
// Part 1: Digital Clock
// MVPs:
/**
 * 1. 4 cards in a row [][]:[][]:[][]
 * 2. shows standard time not military 
 * 3. ticks like normal
 * 4. cards animate would be cool
 * 
 * Have a basic clock display the time with no animations
 * Break the time into pieces and 
 * Maybe we can use setInterval to clock?
 * 
 * 22:30 -> 10:30 -> 10
 * 
 * Successes: 
 * Basic digital clock runs
 * Create css to display a digital one
 */

const ClockIndex = () => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const { hours, minutes, seconds } = time;

    const memoizedHours = useMemo(() => {
        if (hours > 20) {
            return hours - 12;
        };

        // if (hours > 12) {
        //     return `${0}${hours - 12}`;
        // };

        return hours;
    }, [hours]).toString();

    const memoizedMinutes = useMemo(() => {
        return minutes;
    }, [minutes]).toString();

    const zeroedSeconds = seconds < 10 ? `${0}${seconds}` : seconds.toString();

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
                    <div style={{ display: 'flex' }}>
                        <DigitalNumberBase className='digital-one' />
                        <DigitalNumberBase className='digital-two' />
                        <DigitalNumberBase className='digital-three' />
                        <DigitalNumberBase className='digital-four' />
                        <DigitalNumberBase className='digital-five' />
                        <DigitalNumberBase className='digital-six' />
                        <DigitalNumberBase className='digital-seven' />
                        <DigitalNumberBase className='digital-eight' />
                        <DigitalNumberBase className='digital-nine' />
                        <DigitalNumberBase className='digital-zero' />
                    </div>
                    <div>{ `${memoizedHours}:${memoizedMinutes}:${zeroedSeconds}` }</div>
                </div>
            </header>
        </div>
    );
}

export default ClockIndex;

import React, { useState, useEffect, useMemo } from 'react';
// import logo from './logo.svg';
import './App.css';

// The Digital/Traditional should alternate depending on the type of clock
// being displayed
const ClockHeader = () => {
    return (
        <h3>
            Digital/Traditional Clock
        </h3>
    )
};

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
 */

const ClockIndex = () => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const { hours, minutes, seconds } = time;

    const memoizedHours = useMemo(() => {
        if (hours > 20) {
            return hours - 12;
        };

        if (hours > 12) {
            return `${0}${hours - 12}`;
        };
        
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
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                { `${memoizedHours}:${memoizedMinutes}:${zeroedSeconds}` }
            </header>
        </div>
    );
}

export default ClockIndex;

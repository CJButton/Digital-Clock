import React, { useState, useEffect, useMemo } from 'react';
import './App.scss';
import './styles/digital/numbers.scss';

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
                <div className='digital-wrapper'>

                <div className='digital-six'>
                    <div className='top-half'>
                        <div className='top' />
                        <div className='left' />
                    </div>


                    <div className='center-top' />
                    <div className='center-bottom' />
                    <div className='bottom-half'>
                        <div className='left-and-right'>
                            <div className='left' />
                            <div className='right' />
                        </div>
                            <div className='bottom' />
                    </div>
                </div>

                <div className='digital-five'>
                    <div className='top-half'>
                        <div className='top' />
                        <div className='left' />
                    </div>
                    <div className='center-top' />
                    <div className='center-bottom' />
                        <div className='bottom-half'>
                            <div className='right' />
                            <div className='bottom' />
                        </div>
                </div>



                <div className='digital-four'>
                    <div className='top-half'>
                        <div className='left' />
                        <div className='right' />
                    </div>
                    <div className='center-top' />
                    <div className='center-bottom' />
                    <div className='bottom-half'>
                        <div className='right' />
                    </div>
                </div>

                    
                <div className='digital-three'>
                    <div className='top-half'>
                        <div className='top' />
                        <div className='right' />
                    </div>
                    <div className='center-top' />
                    <div className='center-bottom' />
                        <div className='bottom-half'>
                            <div className='right' />
                            <div className='bottom' />
                        </div>
                </div>


                    <div className='digital-one'>
                        <div className='top' />
                        {/* <div className='spacer' /> */}
                        <div className='bottom' />
                    </div>

                    <div className='digital-two'>
                        <div className='top-half'>
                            <div className='top' />
                            <div className='right' />
                        </div>
                        <div className='center-top' />
                        <div className='center-bottom' />
                        <div className='bottom-half'>
                            <div className='left' />
                            <div className='bottom' />
                        </div>

                    </div>
                    
                    <div>{ `${memoizedHours}:${memoizedMinutes}:${zeroedSeconds}` }</div>
                </div>
            </header>
        </div>
    );
}

export default ClockIndex;

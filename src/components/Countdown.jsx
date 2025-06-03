import { useEffect, useRef, useState } from 'react';
import './Countdown.css';
function Countdown() {
    const [target, setTarget] = useState(null);
    const [diff, setDiff] = useState(0);
    const timerId = useRef(0);

    function handleSubmit() {
        timerId.current = setInterval(() => {
            setDiff(new Date(target) - new Date());
        }, 1000);
    }

    useEffect(() => {
        if(diff < 0) {
            clearInterval(timerId.current);
            setDiff(0);
        }
    }, [diff]);

    const getDays = () => {
        return Math.floor(diff/(1000*60*60*24));
    }
    const getHours = () => {
        const hoursInMs = diff%(1000*60*60*24);
        return Math.floor(hoursInMs/(1000*60*60));
    }
    const getMinutes = () => {
        const minutesInMs = diff%(1000*60*60);
        return Math.floor(minutesInMs/(1000*60));
    }
    const getSeconds = () => {
        const secondsInMs = diff%(1000*60);
        return Math.floor(secondsInMs/(1000));
    }
    return (
        <div id="app">
            <h1>Countdown Timer App</h1>
            <div id="input-date">
                <input 
                    type="datetime-local"
                    id="date-time"
                    onChange={(e) => setTarget(e.target.value)}
                />
                <button id="date-time-start" onClick={handleSubmit}>Start</button>
            </div>
            <div id="display-clock">
                <ul>
                    <li><span id="days">{getDays()}</span>days</li>
                    <li><span id="hours">{getHours()}</span>hours</li>
                    <li><span id="minutes">{getMinutes()}</span>minutes</li>
                    <li><span id="seconds">{getSeconds()}</span>seconds</li>
                </ul>
            </div>
        </div>
    )
}

export default Countdown;
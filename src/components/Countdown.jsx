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
        }
    }, [diff])
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
            {diff}
            <div id="display-clock">
                <ul>
                    <li><span id="days">0</span>days</li>
                    <li><span id="hours">0</span>hours</li>
                    <li><span id="minutes">0</span>minutes</li>
                    <li><span id="seconds">0</span>seconds</li>
                </ul>
            </div>
        </div>
    )
}

export default Countdown;
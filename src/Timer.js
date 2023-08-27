import './Timer.css'; // If you have a separate CSS file for styling the header
import React, { useState, useRef } from 'react';
import play from './icons/play_icon.png';
import edit from './icons/edit.png';
import pause from './icons/pause_icon.png';

function Timer() {
  const [timer, setTimer] = useState(60 * 60); // Initial timer value in seconds
  const [isActive, setIsActive] = useState(false);
  const countdownRef = useRef(null);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsActive(true);
    countdownRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(countdownRef.current);
          setIsActive(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setIsActive(false);
    clearInterval(countdownRef.current);
  };

  const resetTimer = () => {
    setIsActive(false);
    clearInterval(countdownRef.current);
    setTimer(30 * 60); // Reset timer value to 30 minutes (30 * 60 seconds)
  };
    return (
        <div className="App">
        <div className="timer">{formatTime(timer)}</div>
        <div className="buttons">
          {!isActive && (
            <button onClick={startTimer}>
              <img src={play} alt="Logo " width={50}/>
            </button>
          )}
          {isActive && (
            <button onClick={pauseTimer}>
              <img src={pause} alt="Logo" width={50} />
            </button>
          )}
          <button onClick={resetTimer}>
            <img src={edit} alt="Logo" width={50} />
          </button>
        </div>
      </div>
    );
  }

  export default Timer;
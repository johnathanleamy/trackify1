import './Timer.css'; // If you have a separate CSS file for styling the header
import React, { useState, useRef } from 'react';
import { ReactComponent as PlayIcon } from "./icons/play_con.svg";
import { ReactComponent as EditIcon } from "./icons/edit_icon.svg";

import pause from './icons/pause_icon.png';
import CircularProgressBar from './Timer2';

function Timer(props) {
  const { title, min, sec } = props; 
  const [timer, setTimer] = useState(min * 60 + sec); // Initial timer value in seconds
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

  //const percentageValue = 50;<div className="timer">{formatTime(timer)}</div>
    return (
        <div className="timer">
          <div className='timer-top'>
            <CircularProgressBar current={timer} startMin={min} startSec={sec} className="timer-progressbar"/>
          <div className="timer-buttons">
              {!isActive && (
                <button onClick={startTimer}>
                  <PlayIcon />
                </button>
              )}
              {isActive && (
                <button onClick={pauseTimer}>
                  <img src={pause} alt="Logo" width={50} />
                </button>
              )}
              <button onClick={resetTimer}>
                <EditIcon />
              </button>
            </div>
          </div>
          <div className='timer-bottom'>
          <div className='timer-title'>
            {title}
          </div>
          <div className='timer-chosing'>
            <div className='timer-chosing-text'>Weekly</div>
              
          </div>
          </div>
          
        </div>
    );
  }

  export default Timer;
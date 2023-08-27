import React, { useState } from 'react';
import './Dashboard/PinnedGoals'; // If you have a separate CSS file for styling the header
import PlusIcon from "./icons/timer_add_icon.png";
import Timer from './Timer';
import "./GoalsPage.css"

function Button({ text, onClick }) {
  return (
    <button className="pg-newButton" onClick={onClick}>
      <img src={PlusIcon} alt="My Image" />
    </button>
  );
}

function GoalsPage({ title }) {
  const [timers, setTimers] = useState([]);
  const [timerCount, removedEmpty] = useState(2);

  const [showComponent,setShow] = useState(true);

  

  function handleButtonClick() {
    if (timerCount >0){
      removedEmpty(timerCount - 1);
      const newTimer = {
        title: "New",
        min: 0,
        sec: 0
      };
      setTimers([...timers, newTimer]);
    }else if(timerCount === 0){
      // Get the element by its ID
      
      
      removedEmpty(timerCount - 1);
      
      const newTimer = {
        title: "New",
        min: 0,
        sec: 0
      };
      setTimers([...timers, newTimer]);
      setShow(false);
    }
  }
  
  return (
    <div className='main-Goal-Dash'>
      <h2 className='head-goal-dash'>
        {title}
      </h2>
     
      <div className='Goals-timerSet' id='Goals-set'>
        <Timer title="Applications" min={30} sec={0} className="dash-timer"/>
        {timers.map((timer, index) => (
          <Timer key={index} title={timer.title} min={timer.min} sec={timer.sec} />
        ))}
        {showComponent ? <Button text="Create Timer" onClick={handleButtonClick} /> : null}
        
        {/* Loop to display the desired number of Timer components */}
        {Array.from({ length: timerCount }).map((_, index) => (
          <div className='pg-empty'></div>
        ))}
        
      </div>
    
    </div>
  );
}


  export default GoalsPage;
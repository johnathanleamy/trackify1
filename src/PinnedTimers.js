import React from 'react';
import './PinnedTimers.css'; // If you have a separate CSS file for styling the header
import TaskTimer from './TimerR';
function PinnedTimers() {
    return (
      <div className='main'>
        <h2 className='head'>
            Pinned Timers
            <TaskTimer />
        </h2>

      </div>
    );
  }

  export default PinnedTimers;
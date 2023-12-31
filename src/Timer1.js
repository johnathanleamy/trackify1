import React, { useState } from "react";
import "./Timer1.css";

const CircularProgressBar = () => {
  const [percentage, setPercentage] = useState(25);

  const handleChangeEvent = (event) => {
    setPercentage(event.target.value);
  };

  const sqSize = 200;
  const radius = (sqSize - 10) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
//from the last input change to match the timer value
  return (
    <div className="timerbar-whole">
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth="10px"
        />
        <circle
          className="circle-progress"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth="10px"
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          className="circle-text"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`${percentage}%`}
        </text>
      </svg>
      <div>
        <input
          id="progressInput"
          type="range"
          min="0"
          max="100"
          step="1"
          value={percentage}
          onChange={handleChangeEvent}
        />
      </div>
    </div>
  );
};

export default CircularProgressBar;

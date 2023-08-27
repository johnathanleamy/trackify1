import React, { useState } from 'react';
import uncheck from '../icons/uncheck_mark.png'; // Import the uncheck image (replace with the actual path)
import check from '../icons/check_mark.png'; // Import the check image (replace with the actual path)
import "./Tasks.css";

function TaskList({ tasks, onSendTaskData1, taskTitle }) {
  const [currentImage, setCurrentImage] = useState(uncheck);
  const [tasksList, setTasks] = useState(tasks); // Define the tasks state and the setTasks function

  const handleClick = (index) => {
    const updatedTasks = [...tasksList]; // Use tasksList state instead of tasks prop
    updatedTasks[index].status = updatedTasks[index].status === 'uncheck' ? 'check' : 'uncheck';
    setTasks(updatedTasks); // Update the tasksList state with the new array
    onSendTaskData1(tasksList);
  };

  return (
    <div className='tasks-list'>
      <h1 className='tasks-todaytask'>{taskTitle}</h1>
      <div className="tasks-header">
        <h4 className='tasks-header-all'>All</h4>
        <h4 className='tasks-header-important'>Important</h4>
        <h4 className='tasks-header-notes'>Notes</h4>
      </div>
      {tasks.map((project, index) => (
        <div key={index} className="task-project">
          <p className='proj-name task-task'>
            <img
              src={project.status === 'uncheck' ? uncheck : check}
              alt="check"
              className='task-check'
              onClick={() => handleClick(index)}
            />
            {project.name}
            <span className="task-date-tag">Right Aligned Text</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
import React, { useState } from 'react';
import uncheck from './icons/uncheck_mark.png'; // Import the uncheck image (replace with the actual path)
import check from './icons/check_mark.png'; // Import the check image (replace with the actual path)
import "./Project.css";

function Project({ tasks, taskTitle }) {
  const [currentImage, setCurrentImage] = useState(uncheck);
  const [tasksList, setTasks] = useState(tasks); // Define the tasks state and the setTasks function
  const [taskSel, selTask] = useState(0)
  const [subtask, setSub] = useState(tasksList[taskSel].subTasks);

  const handleClick = (index) => {
    const updatedTasks = [...tasksList]; // Use tasksList state instead of tasks prop
    updatedTasks[index].status = 'check';
    updatedTasks[taskSel].status = 'uncheck';
    setTasks(updatedTasks); // Update the tasksList state with the new array
    selTask(index);
    setSub(updatedTasks[index].subTasks);
  };
  const handleSub = (index) => {
    console.log(index)
    const updatedTasks = [...tasksList]; // Use tasksList state instead of tasks prop
    updatedTasks[taskSel].subTasks[index].status = updatedTasks[taskSel].subTasks[index].status === 'uncheck' ? 'check' : 'uncheck';
    setTasks(updatedTasks);
    setSub(updatedTasks[taskSel].subTasks); // Update the tasksList state with the new array
  }

  return (
    <div className='project-main'>
      <div className='project-main-list'>
        <h1 className='tasks-todaytask'>{taskTitle}</h1>
        <div className="project-main-main">
        
        
        <div className='project-main-tasks'>
        {tasks.map((project, index) => (
          <div key={index} className="project-main">
            <p className='proj-name task-task'>
              <img
                src={project.status === 'uncheck' ? uncheck : check}
                alt="check"
                className='task-check'
                onClick={() => handleClick(index)}
              />
              {project.name}
            </p>
          </div>
        ))}
        </div>
      
      <div className='project-main-subtask'>
      {subtask.map((subproject, index) => (
          <div key={index} className="project-main">
            <p className='proj-name task-task'>
              <img
                src={subproject.status === 'uncheck' ? uncheck : check}
                alt="check"
                className='task-check'
                onClick={() => handleSub(index)}
              /> 
             
              {subproject.name}
            </p>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
}

export default Project;
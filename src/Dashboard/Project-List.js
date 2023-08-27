import React from 'react';
import "./Project-List.css";
function ProjectList () {
    const projects = [
      {
        name: 'Project 1',
        type: 'Web Development',
        dueDate: '2022-10-15',
        status: 'In Progress',
        progress: 75,
      },
      {
        name: 'Project 2',
        type: 'Mobile App',
        dueDate: '2022-12-31',
        status: 'Completed',
        progress: 100,
      },
      {
        name: 'Project 3',
        type: 'Data Analysis',
        dueDate: '2022-11-30',
        status: 'Pending',
        progress: 20,
      },
    ];


  return (
    <div className='pro-list'>
      <h1>Projects</h1>
        <div className="project" id='proj-header'>
          <h2 className='proj-name'>Name</h2>
          <h2 className='proj-type'>Type</h2>
          <h2 className='proj-due'>Due Date</h2>
          <h2 className='proj-status'>Status</h2>
          <h2 className='proj-prog'>Progress</h2>
        </div>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <p className='proj-name'>{project.name}</p>
          <p className='proj-type'>{project.type}</p>
          <p className='proj-due'>{project.dueDate}</p>
          <p className='proj-status'>{project.status}</p>
          <p className='proj-prog'>{project.progress}%</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;

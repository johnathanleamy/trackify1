import React, { useState } from 'react';
import PinnedGoals from './PinnedGoals';
import ProjectList from './Project-List.js';
import TaskList from './Tasks';
import "./Dashboard.css"

function Dashboard() {
  const tasks= [
    {
      name: 'email this person',
      isImportaint: true,
      dueDate: '2022-10-15',
      status: 'uncheck',
      progress: 75,
    },
    {
      name: 'Call this person',
      isImportaint: true,
      dueDate: '2022-12-31',
      status: 'uncheck',
      progress: 100,
    },
    {
      name: 'Get some water',
      isImportaint: false,
      dueDate: '2022-11-30',
      status: 'uncheck',
      progress: 20,
    },
  ];
  const getDoneTask= [
    {
      name: 'email this person',
      isImportaint: true,
      dueDate: '2022-10-15',
      status: 'uncheck',
      progress: 75,
    },
    {
      name: 'Call this person',
      isImportaint: true,
      dueDate: '2022-12-31',
      status: 'uncheck',
      progress: 100,
    },
    {
      name: 'Get some water',
      isImportaint: false,
      dueDate: '2022-11-30',
      status: 'uncheck',
      progress: 20,
    },
  ];

  return (
    <div>
        <PinnedGoals />
        <ProjectList />
        <div className='Dash-tasks'>
          <div className = "Dash-today">
            <TaskList  tasks={tasks} taskTitle={"Todays Task"} />
          </div>
          <div className = "Dash-getDone">
            <TaskList  tasks= {getDoneTask} taskTitle={"Get Done Tasks"} />
          </div>
        </div>
    </div>
  );
}


  export default Dashboard;
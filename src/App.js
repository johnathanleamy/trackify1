import React, { useState, useRef } from 'react';
//import { AiFillUnlock, AiFillTool, AiFillWarning } from 'react-icons/ai';

import SideBar from './Surrounding/SideBar';
import Header from './Surrounding/Header';
import Dashboard from './Dashboard/Dashboard';
import TaskPage from './TaskPage';
import GoalsPage from './GoalsPage';
import ProjectPage from './ProjectPage';
import "./App.css";


function App() {

  const [page, setPage] = useState('Dashboard');
  const handleChildData = (data) => {
    setPage(data);
  };
  // const handleTaskData = (data) => {
  //   setTasks(data);
  // };
  function handleTaskData (data){
    setTasks(data)
  }

  const tasksStart= [
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
    },{
        name: 'Call this person',
        isImportaint: true,
        dueDate: '2022-12-31',
        status: 'uncheck',
        progress: 100,
      },{
        name: 'Call this person',
        isImportaint: true,
        dueDate: '2022-12-31',
        status: 'uncheck',
        progress: 100,
      },{
        name: 'Call this person',
        isImportaint: true,
        dueDate: '2022-12-31',
        status: 'uncheck',
        progress: 100,
      },
  ];

  const [tasks, setTasks] = useState(tasksStart);
  console.log(page);
  return (
    <div className='fullApp'>
      <div className='app-side'>
        <SideBar onSendData={handleChildData} className="sideBar"/>
      </div>
      <div className='non-side'>
        <Header title = {page} className ="header"/>
        {/* Conditional rendering based on the value of 'page' */}
        {page === 'Dashboard' ? (
          <Dashboard />
        ) : page === 'Tasks' ? (
          <TaskPage onReceiveTaskData={handleTaskData} tasks={tasks}/>
        ) : page === 'Goals' ? (
          <GoalsPage title={"Pinned Goals"}/>
        ) : page === 'Projects' ? (
          <ProjectPage />
        ): null}
      </div>
    </div>
  );
}


export default App;

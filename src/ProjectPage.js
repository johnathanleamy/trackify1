import React, { useState } from 'react';

import Project from './Project';


function ProjectPage() {
    const tasks= [
        {
          name: 'email this person',
          isImportaint: true,
          dueDate: '2022-10-15',
          status: 'check',
          progress: 75,
          subTasks: [
            {name: "Thing 1", status: "uncheck"}, {name: "Thing 2", status: "uncheck"}, {name: "Thing 4", status: "uncheck"}
          ] 
        },
        {
          name: 'Call this person',
          isImportaint: true,
          dueDate: '2022-12-31',
          status: 'uncheck',
          progress: 100,
          subTasks: [
            {name: "Thing 2", status: "uncheck"}, {name: "Thing 2", status: "uncheck"}, {name: "Thing 4", status: "uncheck"}
          ] 
        },
        {
          name: 'Get some water',
          isImportaint: false,
          dueDate: '2022-11-30',
          status: 'uncheck',
          progress: 20,
          subTasks: [
            {name: "Thing 3", status: "uncheck"}, {name: "Thing 2", status: "uncheck"}, {name: "Thing 4", status: "uncheck"}
          ] 
        },{
            name: 'Call this person',
            isImportaint: true,
            dueDate: '2022-12-31',
            status: 'uncheck',
            progress: 100,
            subTasks: [
              {name: "Thing 4", status: "uncheck"}, {name: "Thing 2", status: "uncheck"}, {name: "Thing 4", status: "uncheck"}
            ] 
          },{
            name: 'Call this person',
            isImportaint: true,
            dueDate: '2022-12-31',
            status: 'uncheck',
            progress: 100,
            subTasks: [
              {name: "Thing 5", status: "uncheck"}, {name: "Thing 2", status: "uncheck"}, {name: "Thing 4", status: "uncheck"}
            ] 
          },{
            name: 'Call this person',
            isImportaint: true,
            dueDate: '2022-12-31',
            status: 'uncheck',
            progress: 100,
            subTasks: [
              {name: "Thing 6", status: "uncheck"}, {name: "Thing 2", status: "uncheck"}, {name: "Thing 4", status: "uncheck"}
            ] 
          },
      ];

  return (
    <div className='Tasks-main'>
          <Project tasks={tasks} taskTitle={"Project 1"}/>
    </div>
  );
}


  export default ProjectPage;
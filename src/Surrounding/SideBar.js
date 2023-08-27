import React from 'react';
import './SideBar.css'; // If you have a separate CSS file for styling the header
import { ReactComponent as MainIcon } from "../icons/main_icon.svg";
import { ReactComponent as AddIcon } from "../icons/add_icon.svg";
import { ReactComponent as DishIcon } from "../icons/dashboard_icon.svg";
import { ReactComponent as ProjIcon } from "../icons/proj_icon.svg";
import { ReactComponent as GoalIcon } from "../icons/goals_icon.svg";
import { ReactComponent as TasksIcon } from "../icons/tasks_icon.svg";



function SideBar({ onSendData }) {

  const handleClick = (name) => {
    console.log(name)
    onSendData(name);

    const textElements = document.getElementsByClassName('text');

    // Iterate through the elements
    for (let i = 0; i < textElements.length; i++) {
      const element = textElements[i];
      // Modify the elements or perform any desired actions
      element.style.color = '#F1F1F1';
    }

    const otherElements = document.getElementsByClassName('other');

    // Iterate through the elements
    for (let i = 0; i < otherElements.length; i++) {
      const element = otherElements[i];
      // Modify the elements or perform any desired actions
      element.style.backgroundColor = '#000';
    }

    

    const element = document.getElementById(name);

    const elementText = document.getElementById(name+"-text");

    const elementIcon = document.getElementsByClassName(name+"-icon");
    // Modify the CSS properties
    element.style.backgroundColor = '#F1F1F1';
    elementText.style.color = "#E65F2B";
    elementIcon[0].style.color = "#E65F2B";

    

    

  };
  
    return (
      <header className="sidebar">
        <div className='icon'>
          <MainIcon />
          <div className='iconName'>
            Trackify
          </div>
        </div>
        <div className='createProj'>
          <AddIcon className='add-icon'/>
          <div className='createText'>
            Create new project
          </div>
        </div>
        <button onClick={() => handleClick("Dashboard")} className='dash other' id='Dashboard'>
          <DishIcon className='dashboard-icon Dashboard-icon text'/>
          <div className='DashText text' id='Dashboard-text'>
            Dashboard
          </div>
        </button>
        <button onClick={() => handleClick("Projects")} className='other' id='Projects'>
          <ProjIcon className='other-icon Projects-icon text'/>
          <div className='otherText text' id='Projects-text'>
            Projects
          </div>
        </button>
        <button onClick={() => handleClick("Tasks")} className='other' id='Tasks'>
          <TasksIcon className='other-icon Tasks-icon text'/>
          <div className='otherText text'  id='Tasks-text'>
            Tasks
          </div>
        </button>
        <button onClick={() => handleClick("Goals")} className='other' id='Goals'>
          <GoalIcon className='other-icon Goals-icon text'/>
          <div className='otherText text' id='Goals-text'>
            Goals
          </div>
        </button>
      </header>
    );
  }

  export default SideBar;
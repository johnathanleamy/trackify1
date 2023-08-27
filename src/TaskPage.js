import React, { useState, useMemo, useRef } from 'react';
import TaskList from "./Dashboard/Tasks";
import "./TaskPage.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ReactComponent as AddIcon } from "./icons/add_icon.svg";

function TaskPage({onReceiveTaskData, tasks}) {

 // const [backgroundColor, setBackgroundColor] = useState('default'); // Initial background color class
  const [showPopup, setShowPopup] = useState(false);
  const [date, setDate] = useState([
    new Date(2021, 6, 1)
 
  ]);
  //const [inputValue, setInputValue] = useState('');
  const holdTask = [...tasks];
  const inputRef = useRef(null);
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  const handleColorChange = () => {
    //setBackgroundColor('newColor'); // Change to the desired class name
    //const dimmedEle = document.getElementById('dimmedOverlay');
    //dimmedEle.style.backgroundColor = "rgba(0, 0, 0, 0)";
    holdTask.push({
      name: inputRef.current.value,
      isImportaint: true,
      dueDate: '2022-12-31',
      status: 'uncheck',
      progress: 100,
    });
    onReceiveTaskData(holdTask);
    setShowPopup(false);
  };

  const addTaskPressed = () => {
    setShowPopup(true);
    
  }
  
  const PopupContent = () => (
        <div>
          <div className='Tasks-addPopup'>
          <div className='Tasks-addTitle'>
            title
          </div>
          <input
            type="text"
            className='Tasks-addTextBox'
            // value={inputValue}
            ref={inputRef}
            autoFocus
          />
          <div className='Tasks-Buttons'>
            <button onClick={handleColorChange} className='Tasks-addadd'>
              Add
            </button>
            <button onClick={handleColorChange} className='Tasks-addcancel'>
              Cancel
            </button>
          </div>
          <div><Calendar
          onChange={setDate}
          selectRange={false}
          defaultValue={date}                                                     
        /></div>
        </div>
        </div>
      );

    



  return (
    <div className='Tasks-main'>
      
        <div className='Tasks-LeftSide'>
            <TaskList tasks={tasks} onSendTaskData1={onReceiveTaskData} taskTitle={"Get Done Tasks"} />
            <TaskList tasks={tasks} onSendTaskData1={onReceiveTaskData} taskTitle={"Get Done Tasks"} />
            <TaskList tasks={tasks} onSendTaskData1={onReceiveTaskData} taskTitle={"Get Done Tasks"} />
        </div>
        <div className='Tasks-RightSide'>
            <TaskList tasks={tasks} onSendTaskData1={onReceiveTaskData} taskTitle={"Get Done Tasks"} />
        </div>
        <button className='Tasks-addButton' onClick={addTaskPressed}>
          <div ><AddIcon className='Task-addIcon'/></div>
          <div>Add Task</div>
        </button>  
        { showPopup ? <div id="dimmedOverlay"></div>   : null }
        { showPopup ? <PopupContent /> : null }
          
    </div>
  );
}


  export default TaskPage;
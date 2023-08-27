import React from 'react';
import './Header.css'; // If you have a separate CSS file for styling the header

function Header() {
    return (
      <header className="header-container">
        <h1 className="header-title">Trackify</h1>
        <div className="goals-container">
            <h3 className='header-content'>Daily Tasks</h3>
            <h3 className='header-content'>Weekly Goals</h3>
            <h3 className='header-content'>General Goals</h3>
        </div>
      </header>
    );
  }

  export default Header;
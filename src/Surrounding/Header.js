import React, { useEffect, useState } from 'react';
import './Header.css'; // If you have a separate CSS file for styling the header
import { ReactComponent as SearchIcon } from "../icons/search_icon.svg";
import { ReactComponent as BellIcon } from "../icons/bell_icon.svg";


function Header({ title }) {
    //code needed to update title on prop change
    useEffect(() => {
        setTitle(title);

    console.log('useEffect logic ran');
}, [title]); // 👈️ add props as dependencies
    
    const [title1, setTitle] = useState("Dashboard");


    //-----------------------------------------------------------------------
    return (
      <div className='headering'>
        <h1 className='title'>
            {title1}
        </h1>
        <div className='search'>
            <SearchIcon className = 'search_icon' />
            <div className='search-text'>
            Search for anything...
            </div>
        </div>
        <BellIcon className='bell'/>
      </div>
    );
  }

  export default Header;
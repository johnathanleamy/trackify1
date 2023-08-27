import React, { useState, useRef } from 'react';
//import { AiFillUnlock, AiFillTool, AiFillWarning } from 'react-icons/ai';
import Header from './Header';
import PinnedTimers from './PinnedTimers';
function App() {
  return (
    <div className="App">
      <Header />
      <PinnedTimers />
    </div>
  );
}

export default App;

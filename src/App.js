import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Content from './components/Content';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [display, setDisplay] = useState(true);

  const showText = () => {
    if (display) {
      setDisplay(false);
    } else {
      setTimeout(() => {
        setDisplay(true);
      }, 250);
    }
  };
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar sidebarOpen={sidebarOpen} display={display} />
        <Content
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          showText={showText}
        />
      </div>
    </div>
  );
};

export default App;

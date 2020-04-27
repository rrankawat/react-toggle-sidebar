import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Content from './components/Content';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [display, setDisplay] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const menuClose = () => setMenuOpen(false);

  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar
          sidebarOpen={sidebarOpen}
          display={display}
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
        />
        <Content
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          showText={showText}
          menuClose={menuClose}
        />
      </div>
    </div>
  );
};

export default App;

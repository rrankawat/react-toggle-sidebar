import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './components/layout/Sidebar';
import TopNav from './components/layout/TopNav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import NotFound from './components/pages/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [display, setDisplay] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuth = false;

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
    <Router>
      {isAuth ? (
        <div className="App wrapper">
          {/* Sidebar */}
          <Sidebar
            sidebarOpen={sidebarOpen}
            display={display}
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
          />

          {/* Content */}
          <div className="content">
            {/* Navbar */}
            <TopNav
              sidebarOpen={sidebarOpen}
              toggleSidebar={toggleSidebar}
              showText={showText}
              menuClose={menuClose}
            />

            {/* Main Content */}
            <div className="container-fluid p-4">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      ) : (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      )}
    </Router>
  );
};

export default App;

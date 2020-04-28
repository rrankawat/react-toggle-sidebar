import React from 'react';
import { Link } from 'react-router-dom';
import { FaDesktop, FaDiceD6, FaWeight } from 'react-icons/fa';
import { Collapse } from 'reactstrap';

const Sidebar = ({ sidebarOpen, display, menuOpen, toggleMenu }) => {
  return (
    <div className={`sidebar ${sidebarOpen ? '' : 'sidebar-collapse'}`}>
      <h4 className="m-auto text-center py-3">D{sidebarOpen && 'ashboard'}</h4>

      <div className="sidebar-line"></div>

      <ul className="sidebar-list">
        <li>
          <Link to="/">
            <FaDiceD6 size={17} />
            {display && <span className="ml-2">Home</span>}
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaDesktop size={15} />
            {display && <span className="ml-2">About Us</span>}
          </Link>
        </li>
        <li>
          <Link to="#" onClick={toggleMenu}>
            <FaWeight size={15} />
            {display && <span className="ml-2">Toggle ></span>}
          </Link>
          <Collapse isOpen={menuOpen}>
            <ul className="list-unstyled ml-4">
              <li>
                <a to="#">Link 1</a>
              </li>
              <li>
                <a to="#">Link 2</a>
              </li>
              <li>
                <a to="#">Link 3</a>
              </li>
            </ul>
          </Collapse>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

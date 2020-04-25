import React from 'react';
import { FaDesktop, FaDiceD6, FaWeight } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, display }) => {
  return (
    <div className={`sidebar ${sidebarOpen ? '' : 'sidebar-collapse'}`}>
      <h4 className="m-auto text-center py-3">D{sidebarOpen && 'ashboard'}</h4>

      <div className="sidebar-line"></div>

      <ul className="sidebar-list">
        <li>
          <a href="#">
            <FaDiceD6 size={17} />
            {display && <span className="ml-2">Log Management</span>}
          </a>
        </li>
        <li>
          <a href="#">
            <FaDesktop size={15} />
            {display && <span className="ml-2">Visualization</span>}
          </a>
        </li>
        <li>
          <a href="#">
            <FaWeight size={15} />
            {display && <span className="ml-2">Dashboard</span>}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

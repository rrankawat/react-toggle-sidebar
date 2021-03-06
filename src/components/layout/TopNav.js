import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

const TopNav = ({ toggleSidebar, showText, menuClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const change = () => {
    toggleSidebar();
    showText();
    menuClose();
  };

  return (
    <Navbar color="light" light expand="sm">
      <FaBars
        onClick={change}
        style={{ cursor: 'pointer' }}
        className="mr-sm-2"
      />
      <NavbarToggler onClick={toggle} className="ml-auto" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Dashboard</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Logout</NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default TopNav;

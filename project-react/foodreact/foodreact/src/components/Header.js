import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="bg-dark "  expand="md">
        <NavbarBrand href="/" className="offset-1">Ss-Foods</NavbarBrand>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="offset-3" navbar>
            <NavItem className="px-2" >
              <NavLink href="/" className="text-light"><i class="fa fa-home"></i>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="text-light">About</NavLink>
            </NavItem>
            <NavItem>
               <NavLink className="text-light">Contact</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import './styles.css';
import Logo from './../../assets/img/logo_navbar.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => { 
      setOpen(!open);
  }
  return (
    <div>
      <Navbar color="dark" expand="md">
        <NavbarBrand tag={Link} to="/">
        <img src={Logo} className="img-header" alt="Logo LibrasFlix" />
        </NavbarBrand>  
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Link className="nav-icon" onClick={toggle}>
            <FiMenu size={28} />
        </Link>
        <Collapse isOpen={open} navbar fluid={true}>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/filmes">Filmes</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
          <NavLink tag={Link} to="/cadastro">Cadastre-se</NavLink>
          </NavbarText>
          <NavbarText>
          <NavLink className="btn btn-danger" tag={Link} to="/login">Login</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
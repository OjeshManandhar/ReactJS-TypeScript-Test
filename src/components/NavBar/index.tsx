import React from 'react';

// packages
import { Link } from '@reach/router';

// assets
import logo from 'assets/logo.png';

// styles
import * as Nav from './styles';

function NavBar() {
  return (
    <Nav.Container>
      <Nav.Logo src={logo} />
      <Nav.Navs>
        <Nav.NavLinks>
          <Link to='/home'>Home</Link>
        </Nav.NavLinks>
        <Nav.NavLinks>
          <Link to='/about'>About</Link>
        </Nav.NavLinks>
        <Nav.NavLinks>
          <Link to='/product'>Product</Link>
        </Nav.NavLinks>
        <Nav.NavLinks>
          <Link to='/contact'>Contact</Link>
        </Nav.NavLinks>
      </Nav.Navs>
    </Nav.Container>
  );
}

export default NavBar;

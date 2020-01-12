import React from 'react';

import * as Nav from './styles';

import logo from 'assets/logo.png';

function NavBar() {
  return (
    <Nav.Container>
      <Nav.Logo src={logo} />
      <Nav.Navs>
        <Nav.NavLinks>Home</Nav.NavLinks>
        <Nav.NavLinks>About</Nav.NavLinks>
        <Nav.NavLinks>Product</Nav.NavLinks>
        <Nav.NavLinks>Contact</Nav.NavLinks>
      </Nav.Navs>
    </Nav.Container>
  );
}

export default NavBar;

import React from 'react';

import * as Nav from './styles';

import logo from 'assets/logo.png';

function NavBar() {
  return (
    <Nav.Container>
      <Nav.Logo src={logo} />
      <Nav.Navs>
        <Nav.NavLinks href='#home'>Home</Nav.NavLinks>
        <Nav.NavLinks href='#about'>About</Nav.NavLinks>
        <Nav.NavLinks href='#product'>Product</Nav.NavLinks>
        <Nav.NavLinks href='#contact'>Contact</Nav.NavLinks>
      </Nav.Navs>
    </Nav.Container>
  );
}

export default NavBar;

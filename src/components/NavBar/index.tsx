import React from 'react';

import * as Nav from './styles';

import logo from 'assets/logo.png';

function addSmoothScrolling() {
  document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    const anchorArr = Array.from(anchors);

    anchorArr.forEach((anchor: any) => {
      anchor.addEventListener('click', function(e: any) {
        e.preventDefault();

        document.querySelector(anchor.hash).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'center'
        });
      });
    });
  });
}

function NavBar() {
  addSmoothScrolling();

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

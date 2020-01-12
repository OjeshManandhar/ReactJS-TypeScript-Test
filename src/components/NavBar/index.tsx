import React from 'react';

// packages
import scrollIntoView from 'scroll-into-view-if-needed';

// context
import NavBarContext from 'context/navBarContext/context';

// assets
import logo from 'assets/logo.png';

// styles
import * as Nav from './styles';

function scrollToDiv(ref: React.RefObject<HTMLDivElement>) {
  console.log('ref.current:', ref.current);
  console.log('ref:', ref);

  // scrollIntoView(ref.current, {
  //   behavior: 'smooth',
  //   block: 'end',
  //   inline: 'nearest'
  // });

  // ref.current.scrollIntoView({ block: 'end', behavior: 'smooth' });

  // ref.current.scrollIntoView({
  //   behavior: 'smooth',
  //   block: 'end',
  //   inline: 'nearest'
  // });
}

function NavBar() {
  return (
    <NavBarContext.Consumer>
      {context => {
        return (
          <Nav.Container>
            <Nav.Logo src={logo} />
            <Nav.Navs>
              <Nav.NavLinks onClick={() => scrollToDiv(context.home)}>
                Home
              </Nav.NavLinks>
              <Nav.NavLinks onClick={() => scrollToDiv(context.about)}>
                About
              </Nav.NavLinks>
              <Nav.NavLinks onClick={() => scrollToDiv(context.product)}>
                Product
              </Nav.NavLinks>
              <Nav.NavLinks onClick={() => scrollToDiv(context.contact)}>
                Contact
              </Nav.NavLinks>
            </Nav.Navs>
          </Nav.Container>
        );
      }}
    </NavBarContext.Consumer>
  );
}

export default NavBar;

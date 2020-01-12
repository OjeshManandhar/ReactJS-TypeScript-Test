import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100px;
  width: 100%;
  padding: 0px 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid black;
`;

export const Logo = styled.img`
  height: 75px;
  width: 70px;
`;

export const Navs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.a`
  margin: 0px 10px;
  font-variant: small-caps;

  width: 100px;
  text-align: center;

  ::before {
    content: '[';
    padding-right: 0px;
    opacity: 0;
    transition: padding-right 0.5s;
  }

  ::after {
    content: ']';
    padding-left: 0px;
    opacity: 0;
    transition: padding-left 0.5s;
  }

  :hover {
    color: blueviolet;
    cursor: pointer;

    ::before {
      opacity: 1;
      padding-right: 15px;
    }
    ::after {
      opacity: 1;
      padding-left: 15px;
    }
  }
`;

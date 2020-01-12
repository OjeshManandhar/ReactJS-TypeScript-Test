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
  color: black;
  text-decoration: none;
  font-variant: small-caps;

  width: 100px;
  text-align: center;

  :hover {
    color: blueviolet;

    ::before {
      content: '[';
      padding-right: 10px;
    }
    ::after {
      content: '  ]';
      padding-left: 10px;
    }
  }
`;

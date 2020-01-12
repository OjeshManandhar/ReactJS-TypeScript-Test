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
  width: 75px;
`;

export const Navs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.span`
  margin: 0px 20px;
  font-variant: small-caps;

  :hover {
    color: blueviolet;
    cursor: pointer;

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

import React from 'react';

// package
import { Link } from '@reach/router';

//components
import NavBar from 'components/NavBar';

// ref
import { LongDivRefs } from 'common/ref';

// provider
import NavBarProvider from 'context/navBarContext/provider';

// styles
import * as S from 'common/styles/styles';
import { Button } from './styles';

function Home() {
  return (
    <NavBarProvider>
      <S.Container>
        <NavBar />
        <S.LongDiv ref={LongDivRefs.home} paddingTop='100px'>
          Home <br />
          <Button>
            <Link to='/register'>Register</Link>
          </Button>
        </S.LongDiv>
        <S.LongDiv ref={LongDivRefs.about}>About</S.LongDiv>
        <S.LongDiv ref={LongDivRefs.product}>Product</S.LongDiv>
        <S.LongDiv ref={LongDivRefs.contact}>Contact</S.LongDiv>
      </S.Container>
    </NavBarProvider>
  );
}

export default Home;

import React from 'react';

// package
import { Link } from '@reach/router';

//components
import NavBar from 'components/NavBar';

// styles
import * as S from 'common/styles/styles';
import { Button } from './styles';

// types
import { HomeProps } from 'Navigator/types';

function Home(props: HomeProps) {
  return (
    <S.Container>
      <NavBar />
      <S.LongDiv paddingTop='100px'>
        Home <br />
        <Button>
          <Link to='/register'>Register</Link>
        </Button>
      </S.LongDiv>
      <S.LongDiv>About</S.LongDiv>
      <S.LongDiv>Product</S.LongDiv>
      <S.LongDiv height='500px'>Contact</S.LongDiv>
    </S.Container>
  );
}

export default Home;

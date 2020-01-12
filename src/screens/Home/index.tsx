import React from 'react';

// package
import { Link } from '@reach/router';

//components
import NavBar from 'components/NavBar';

// styles
import * as S from 'common/styles/styles';
import { Button } from './styles';

function Home() {
  return (
    <S.Container>
      <NavBar />
      <S.LongDiv paddingTop='100px'>
        Home page <br />
        <Button>
          <Link to='/register'>Register</Link>
        </Button>
      </S.LongDiv>
    </S.Container>
  );
}

export default Home;

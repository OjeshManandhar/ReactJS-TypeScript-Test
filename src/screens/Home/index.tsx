import React from 'react';

// package
import { Link } from '@reach/router';

// styles
import * as S from 'common/styles';
import { Button } from './styles';

function Home() {
  return (
    <S.Container>
      <S.LongDiv>
        Home page <br />
        <Button>
          <Link to='/register'>Register</Link>
        </Button>
      </S.LongDiv>
    </S.Container>
  );
}

export default Home;

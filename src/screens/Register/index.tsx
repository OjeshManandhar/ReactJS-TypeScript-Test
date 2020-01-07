import React from 'react';

// package
import { Link } from '@reach/router';

// styles
import * as S from 'common/styles';
import { Button } from './styles';

function Register() {
  return (
    <S.Container>
      <S.LongDiv>
        Register page <br />
        <Button>
          <Link to='/'>Home</Link>
        </Button>
      </S.LongDiv>
    </S.Container>
  );
}

export default Register;

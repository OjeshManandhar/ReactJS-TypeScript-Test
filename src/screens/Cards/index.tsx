import React from 'react';

// package
import { Link, RouteComponentProps } from '@reach/router';

// components
import NavBar from 'components/NavBar';

// styles
import { Container } from 'common/styles/styles';
import * as S from './styles';

function Cards(props: RouteComponentProps) {
  return (
    <Container>
      {/* <NavBar /> */}
      <S.Padding>
        Cards <br />
        <S.Button>
          <Link to='/'>Home</Link>
        </S.Button>
        <S.Button>
          <Link to='/register'>Register</Link>
        </S.Button>
      </S.Padding>
      <S.Container>
        <S.Slider>
          <S.CardContainer>
            <S.Card>
              <h1>0</h1>
              <h1>Image</h1>
              <p>Image Info</p>
            </S.Card>
          </S.CardContainer>
          <S.CardContainer>
            <S.Card>
              <h1>1</h1>
              <h1>Image</h1>
              <p>Image Info</p>
            </S.Card>
          </S.CardContainer>
          <S.CardContainer>
            <S.Card>
              <h1>2</h1>
              <h1>Image</h1>
              <p>Image Info</p>
            </S.Card>
          </S.CardContainer>
        </S.Slider>
      </S.Container>
    </Container>
  );
}

export default Cards;

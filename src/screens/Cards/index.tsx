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
      <NavBar />
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
          <S.Card>0</S.Card>
          <S.Card>1</S.Card>
          <S.Card>2</S.Card>
          <S.Card>3</S.Card>
          <S.Card>4</S.Card>
          <S.Card>5</S.Card>
          <S.Card>6</S.Card>
          <S.Card>7</S.Card>
          <S.Card>8</S.Card>
          <S.Card>9</S.Card>
          <S.Card>10</S.Card>
          <S.Card>11</S.Card>
        </S.Slider>
      </S.Container>
    </Container>
  );
}

export default Cards;

import React from 'react';

// package
import { Link, RouteComponentProps } from '@reach/router';

// components
// import NavBar from 'components/NavBar';

// styles
import { Container } from 'common/styles/styles';
import * as S from './styles';

const slider = React.createRef<HTMLDivElement>();
const cards = [
  React.createRef<HTMLDivElement>(),
  React.createRef<HTMLDivElement>(),
  React.createRef<HTMLDivElement>()
];
var displayedCard = 0,
  leftCard = 0,
  rightCard = 1;

function scrollCards(direction: string) {
  if (window.innerWidth < 700) {
    if (direction === 'left') {
      if (displayedCard !== 0) {
        displayedCard--;
      }
    } else if (direction === 'right') {
      if (displayedCard !== cards.length - 1) {
        displayedCard++;
      }
    }
  } else if (window.innerWidth < 992) {
    if (direction === 'left') {
      if (leftCard !== 0) {
        leftCard--;
        rightCard--;
        displayedCard = leftCard;
      }
    } else if (direction === 'right') {
      if (displayedCard !== cards.length - 1) {
        leftCard++;
        rightCard++;
        displayedCard = rightCard;
      }
    }
  }

  (cards[displayedCard] as any).current.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  });
}

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
        <S.SliderControlLeft onClick={() => scrollCards('left')}>
          {'<-'}
        </S.SliderControlLeft>
        <S.SliderControlRight onClick={() => scrollCards('right')}>
          {'->'}
        </S.SliderControlRight>

        <S.Slider ref={slider}>
          <S.CardContainer ref={cards[0]}>
            <S.Card>
              <h1>0</h1>
              <h1>Image</h1>
              <p>Image Info</p>
            </S.Card>
          </S.CardContainer>
          <S.CardContainer ref={cards[1]}>
            <S.Card>
              <h1>1</h1>
              <h1>Image</h1>
              <p>Image Info</p>
            </S.Card>
          </S.CardContainer>
          <S.CardContainer ref={cards[2]}>
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

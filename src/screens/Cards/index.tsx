import React, { useEffect } from 'react';

// package
import { Link, RouteComponentProps } from '@reach/router';

// assets
import Card0 from 'assets/Cards/card0.jpg';
import Card1 from 'assets/Cards/card1.jpg';
import Card2 from 'assets/Cards/card2.jpg';

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
  if (window.innerWidth < 800) {
    if (direction === 'left') {
      if (displayedCard !== 0) {
        displayedCard--;
      }
    } else if (direction === 'right') {
      if (displayedCard !== cards.length - 1) {
        displayedCard++;
      }
    }
  } else if (window.innerWidth < 1200) {
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
    inline: 'center'
  });
}

function preventScroll() {
  if (window.innerWidth < 1200) {
    if ((slider as any).current) {
      (slider as any).current.style['overflow-x'] = 'hidden';
    }

    // this does not worker. Why??
    // slider.current?.style['overflow-x'] = 'hidden';
  } else {
    if ((slider as any).current) {
      (slider as any).current.style['overflow-x'] = 'scroll';
    }

    // this does not worker. Why??
    // slider.current?.style['overflow-x'] = 'scroll';
  }
}

function handleResize() {
  preventScroll();

  displayedCard = leftCard = 0;
  rightCard = 1;

  // Wont provide any animation
  (slider as any).current.scrollLeft = 0;
}

function Cards(props: RouteComponentProps) {
  window.onresize = handleResize;

  useEffect(() => {
    // (slider as any).current === slider.current?
    slider.current?.addEventListener('touchmove', preventScroll, false);
    slider.current?.addEventListener('scroll', preventScroll, false);

    return () => {
      slider.current?.removeEventListener('touchmove', preventScroll, false);
      slider.current?.removeEventListener('scroll', preventScroll, false);
    };
  });

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
              <S.CardImage src={Card0} />
              <S.CardHeader>Card 0</S.CardHeader>
              <S.CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur mollis lectus quam, ut ullamcorper felis tristique a.
                Nunc tristique risus ante, sit amet aliquam ex blandit eu. Donec
                elit mauris.
              </S.CardContent>
            </S.Card>
          </S.CardContainer>
          <S.CardContainer ref={cards[1]}>
            <S.Card>
              <S.CardImage src={Card1} />
              <S.CardHeader>Card 1</S.CardHeader>
              <S.CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                facilisis, tortor id aliquam condimentum, enim.
              </S.CardContent>
            </S.Card>
          </S.CardContainer>
          <S.CardContainer ref={cards[2]}>
            <S.Card>
              <S.CardImage src={Card2} />
              <S.CardHeader>Card 2</S.CardHeader>
              <S.CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                luctus varius quam at ultricies. Etiam suscipit diam sed tortor
                fringilla, et ullamcorper tellus congue. Proin at posuere leo,
                vel elementum lectus. Nullam interdum velit vel nunc venenatis
                posuere. Pellentesque habitant.
              </S.CardContent>
            </S.Card>
          </S.CardContainer>
        </S.Slider>
      </S.Container>
    </Container>
  );
}

export default Cards;

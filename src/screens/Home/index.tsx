import React from 'react';

// package
import { Link } from '@reach/router';

//components
import NavBar from 'components/NavBar';

// ref
import { LongDivRefs } from 'common/ref';

// styles
import * as S from 'common/styles/styles';
import { Button } from './styles';

// types
import { HomeProps } from 'Navigator/types';

function scrollToDiv(ref: React.RefObject<HTMLDivElement>) {
  // Wont work if the ref is not yet loaded in DOM
  // so this event loop will continue till the ref is loaded
  // and scroll it to view
  // PROBLEM: If by mistake we pass a ref that is not going to be
  // rendered then, it will loop forever.
  // Clearing the interval after certain time colud colve this problem.
  var pageRenderLoop: any = setInterval(() => {
    if ((ref as any).current) {
      clearInterval(pageRenderLoop);
      pageRenderLoop = false; // To indicate interval is cleared

      (ref as any).current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
      });
    }
  }, 100);

  setTimeout(() => {
    if (pageRenderLoop !== false) {
      clearInterval(pageRenderLoop);
      pageRenderLoop = false; // To indicate interval is cleared
    }
  }, 5 * 1000);
}

function Home(props: HomeProps) {
  // To scroll to the required div
  scrollToDiv(LongDivRefs[props.sectionId as string]);

  return (
    <S.Container>
      <NavBar />
      <S.LongDiv ref={LongDivRefs.home} paddingTop='100px'>
        Home <br />
        <Button>
          <Link to='/register'>Register</Link>
        </Button>
        <Button>
          <Link to='/register?query=there+is+query+here'>
            Register with query
          </Link>
        </Button>
        <Button>
          <Link to='/cards'>Cards</Link>
        </Button>
      </S.LongDiv>
      <S.LongDiv ref={LongDivRefs.about}>About</S.LongDiv>
      <S.LongDiv ref={LongDivRefs.product}>Product</S.LongDiv>
      <S.LongDiv ref={LongDivRefs.contact} height='500px'>
        Contact
      </S.LongDiv>
    </S.Container>
  );
}

export default Home;

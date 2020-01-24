import React from 'react';

// package
import { Link, Location, RouteComponentProps } from '@reach/router';

// components
import NavBar from 'components/NavBar';

// styles
import * as S from 'common/styles/styles';
import { Button } from './styles';

function replaceGlobally(
  original: string,
  searchTxt: string,
  replaceTxt: string
) {
  const regex = new RegExp(searchTxt, 'g');
  return original.replace(regex, replaceTxt);
}

function Register(props: RouteComponentProps) {
  return (
    <Location>
      {props => {
        console.log('query:', props);

        var query = props.location.search.replace('?query=', '');

        query = replaceGlobally(query, '%22', '"');
        query = replaceGlobally(query, '%20', ' ');

        console.log('query:', query);
        console.log('query:', JSON.parse(query));

        return (
          <S.Container>
            <NavBar />
            <S.LongDiv paddingTop='100px'>
              Register page <br />
              <Button>
                <Link to='/'>Home</Link>
              </Button>
              <Button>
                <Link to='/cards'>Cards</Link>
              </Button>
            </S.LongDiv>
          </S.Container>
        );
      }}
    </Location>
  );
}

export default Register;

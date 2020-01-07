import React from 'react';

// packages
import { Router, RouteComponentProps } from '@reach/router';

// screens
import Home from 'screens/Home';
import Register from 'screens/Register';

// types
import { RouterPageProps } from './types';

const RouterPage = (props: RouterPageProps & RouteComponentProps) =>
  props.pageComponent;

function Navigator() {
  return (
    <Router>
      <RouterPage path='/' pageComponent={<Home />} />
      <RouterPage path='/register' pageComponent={<Register />} />
    </Router>
  );
}

export default Navigator;

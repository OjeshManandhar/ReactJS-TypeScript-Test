import React from 'react';

// packages
import { Router } from '@reach/router';

// screens
import Home from 'screens/Home';
import Register from 'screens/Register';

function Navigator() {
  return (
    <Router>
      <Home path='/' sectionId='home' />
      <Home path='/:sectionId' />
      <Register path='/register' />
    </Router>
  );
}

export default Navigator;

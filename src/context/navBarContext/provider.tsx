import React from 'react';

// ref
import { LongDivRefs } from 'common/ref';

// context
import NavBarContext from 'context/navBarContext/context';

function NavBarProvider(props: any) {
  return (
    <NavBarContext.Provider value={LongDivRefs}>
      {props.children}
    </NavBarContext.Provider>
  );
}

export default NavBarProvider;

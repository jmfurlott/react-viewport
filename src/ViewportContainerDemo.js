'use strict';

import React from 'react';
import ViewportContainer from './ViewportContainer';

global.React = React;

React.render(
  <ViewportContainer
    style={{
      backgroundColor: 'red',
      height: '50vh',
      width: '50vw',
    }}
  >
    Hello world
  </ViewportContainer>,
  document.getElementById('demo')
);

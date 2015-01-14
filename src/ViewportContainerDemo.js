'use strict';

import React from 'react';
import ViewportContainer from './ViewportContainer';

global.React = React;

React.render(
  <ViewportContainer
    style={{
      backgroundColor: 'red',
      minHeight: '90vh',
    }}
  >
    Hello world
  </ViewportContainer>,
  document.getElementById('demo')
);

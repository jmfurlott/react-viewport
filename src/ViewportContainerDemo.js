'use strict';

import React from 'react/addons';
import ViewportContainer from './ViewportContainer.js';

React.render(
  <ViewportContainer viewWidth="50" viewHeight="50" className="test" >Hello world</ViewportContainer>,
  document.getElementById('demo')
);

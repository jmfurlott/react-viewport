'use strict';

import { expect } from 'chai';
import { jsdom } from 'jsdom';
global.document = jsdom('');
global.window = document.parentWindow;
global.navigator = {};
navigator.userAgent = 'node';


describe('ViewportContainer', function() {
  
  import React from 'react/addons';
  let { TestUtils } = React.addons;

  import ViewportContainer from '../ViewportContainer';

  let component = TestUtils.renderIntoDocument( 
    <ViewportContainer>
      Hello
    </ViewportContainer>
  );

  let componentEl = component.getDOMNode();
  
  it('has base class', function() { 
    expect(elementHasClass(componentEl, 'Component')).to.be.false;
  });

});

function elementHasClass(el, className) {
  return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
}

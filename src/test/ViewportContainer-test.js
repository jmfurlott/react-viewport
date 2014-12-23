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
    <ViewportContainer
      id="foobar"
      className="foo bar"
      viewHeight='50'
    >
      Hello
    </ViewportContainer>
  );

  let componentEl = component.getDOMNode();
  
  it('has base class', function() { 
    expect(elementHasClass(componentEl, 'Component')).to.be.false;
  });

  it('is a div by default', function() {
    expect(componentEl.nodeName).to.equal('DIV');
  });

  it('has specified id', function() {
    expect(componentEl.id).to.equal('foobar');
  });

  it('preserves existing classes', function() {
    expect(elementHasClass(componentEl, 'foo')).to.be.true;
    expect(elementHasClass(componentEl, 'bar')).to.be.true;
  });

});

function elementHasClass(el, className) {
  return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
}

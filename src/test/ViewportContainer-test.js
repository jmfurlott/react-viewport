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

  it('is a div', () => {
    let component = TestUtils.renderIntoDocument(<ViewportContainer />);
    let componentEl = component.getDOMNode();

    expect(componentEl.nodeName).to.equal('DIV');
  });

  it('transfers existing props', () => {
    let component = TestUtils.renderIntoDocument(
      <ViewportContainer foo='bar' bar='baz' />
    );

    expect(component.props.foo).to.equal('bar');
    expect(component.props.bar).to.equal('baz');
  });

});

function elementHasClass(el, className) {
  return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
}

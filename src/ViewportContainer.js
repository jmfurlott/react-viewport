'use strict';

import React from 'react';
import assign from 'react/lib/Object.assign';

let ViewportContainer = React.createClass({

  getInitialState() {
    return {
      viewportHeight: null,
      viewportWidth: null,
    };
  },

  getDefaultProps() {
    return {
      style: {},

      // Default to detecting for Modernizr support
      browserSupportsVh: typeof document === 'undefined' || rootElementHasClass('cssvhunit'),
      browserSupportsVw: typeof document === 'undefined' || rootElementHasClass('cssvwunit'),
    };
  },

  componentDidMount() {
    if (!this.props.browserSupportsVh || !this.props.browserSupportsVw) {
      this.getWindowDimensions();
      window.addEventListener('resize', this.getWindowDimensions);
    }
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowDimensions);
  },

  getWindowDimensions() {
    this.setState({
      viewportHeight: window.innerHeight,
      viewportWidth: window.innerWidth,
    });
  },

  render() {

    let style = Object.keys(this.props.style).reduce((result, prop) => {
      let value = this.props.style[prop];

      if (isVhUnit(value)) {
        if (this.props.browserSupportsVh) {
          result[prop] = value;
        } else {
          result[prop] = `${this.state.viewportHeight * removeViewportUnit(value) / 100}px`;
        }
      } else if (isVwUnit(value)) {
        if (this.props.browserSupportsVw) {
          result[prop] = value;
        } else {
          result[prop] = `${this.state.viewportWidth * removeViewportUnit(value) / 100}px`;
        }
      }

      return result;
    }, {});

    style = assign({}, this.props.style, style);

    return (
      <div
        {...this.props}
        style={style}
      />
    );
  }
});

function isVhUnit(value) {
  return typeof value === 'string' && stringEndsWith(value, 'vh');
}

function isVwUnit(value) {
  return typeof value === 'string' && stringEndsWith(value, 'vw');
}

function removeViewportUnit(value) {
  return value.slice(0, -2);
}

function stringEndsWith(string, suffix) {
  return string.indexOf(suffix, string.length - suffix.length) !== -1
}

function elementHasClass(el, className) {
  return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function rootElementHasClass(className) {
  return typeof document !== 'undefined' && elementHasClass(document.documentElement, className);
}

export default ViewportContainer;

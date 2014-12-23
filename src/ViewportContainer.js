'use strict';

import React from 'react/addons';

let ViewportContainer = React.createClass({ 

  getDefaultProps() {
    return {
      viewHeight: 100,
      viewWidth: 100
    };
  },

  render() {
    return(
      <div className={"ViewportContainer " + this.props.className}
        {...this.props}
      >
        Hello world
      </div>
    );
  }
});
export default ViewportContainer;

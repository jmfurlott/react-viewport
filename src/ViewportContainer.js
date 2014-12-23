'use strict';

import React from 'react/addons';
var cx = React.addons.classSet;


let ViewportContainer = React.createClass({ 

  getDefaultProps() {
    return {
      viewHeight: 100,
      viewWidth: 100
    };
  },

  render() {
   
    let classes = [ 'ViewportContainer' ];

    if(!!this.props.className) {
      classes.push(this.props.className);
    }

    classes = classes.join(' ');

    console.log(this.props.viewHeight);

    return(
      <div 
        {...this.props}
        className={classes}
      />
    );
  }
});
export default ViewportContainer;

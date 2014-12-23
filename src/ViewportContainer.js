'use strict';

import React from 'react/addons';
import heightDetection from './heightDetection.js';
import widthDetection from './widthDetection.js';

let ViewportContainer = React.createClass({ 

  getInitialState() {
    return {
      height: false,
      width: false,
    }
  },

  getDefaultProps() {
    return {
      viewHeight: '100',
      viewWidth: '100'
    };
  },

  componentDidMount() {
    // Event listeners
    if(!heightDetection || !widthDetection) {
      import $ from 'jquery';
      let self = this;
      $(window).resize( function() {
        let containerEl = self.refs.container.getDOMNode();
        
        let containerHeight = (parseInt(self.props.viewHeight)/100) * window.innerHeight;
        self.setState({ height: containerHeight });

        let containerWidth = (parseInt(self.props.viewWidth)/100) * window.innerWidth;
        self.setState({ width: containerWidth });
      });
    }
  },
  
  componentDidUnmount() {
    $(window).off('resize');
  },

  render() {
    // Assign classes to the container
    let classes = [ 'ViewportContainer' ];
    if(!!this.props.className) {
      classes.push(this.props.className);
    }

    classes = classes.join(' ');

    // Styling for the container with fallbacks
    var containerStyle = {backgroundColor: 'red'};
    
    // First check if browser compatible with vw or vh, if so use that
     if(heightDetection) {
      containerStyle.height = this.props.viewHeight + 'vh';
    } else if(this.state.height) {
        containerStyle.height = this.state.height;
    } else {
      containerStyle.height = (parseInt(this.props.viewHeight)/100) * window.innerHeight;

    }

   if(widthDetection) {
      containerStyle.width = this.props.viewWidth + 'vw';
    } else if(this.state.width) {
        containerStyle.width = this.state.width;
    } else {
      containerStyle.width = (parseInt(this.props.viewWidth)/100) * window.innerWidth;
    }

    return(
      <div 
        {...this.props}
        className={classes}
        style={containerStyle}
        ref="container"
      />
    );
  }
});


export default ViewportContainer;

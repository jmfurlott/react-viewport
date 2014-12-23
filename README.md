react-viewport
==============

Build React components with specified view height and width units.  Supports fallback values for browsers that do not support vh or vw.

```
$ npm install --save react-viewport
```

## Usage

Just use like you would any other `div`.

```
var React = require('react');
var ViewportContainer = require('react-viewport');

var Component = React.createClass({
    render: function() {
        <ViewportContainer
            className="Container"
            viewHeight="50"
            viewWidth="50"
        >

            ...

       </ViewportContainer>
    }
});

```




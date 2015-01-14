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
            height="50vh"
            minWidth="75vw"
        >

            ...

       </ViewportContainer>
    }
});

```

## Breaking changes

`viewHeight` and `viewWidth` are no longer supported, and should just be `height` and `width`.  This change allows greater flexibility to use any css properties such as `min-height` or `min-width`.

## License

MIT

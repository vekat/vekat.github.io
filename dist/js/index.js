'use strict';

console.log('Testing React...');

var Screen = React.createClass({
  displayName: 'Screen',

  componentDidMount: function componentDidMount() {
    console.log('Screen Component did mount.');
  },

  render: function render() {
    return React.createElement(
      'main',
      null,
      React.createElement(
        'h1',
        null,
        'Work in Progress...'
      ),
      React.createElement('img', { id: 'idle', src: './dist/assets/images/idle.gif' })
    );
  }
});

ReactDOM.render(React.createElement(Screen, null), document.body);
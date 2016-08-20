import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';


const NODE_ENV = process.env.NODE_ENV;
console.log('Starting in environment:', NODE_ENV);


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const bodyMount = document.getElementById('body-mount-point');


const App = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  componentWillMount: function() {
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <p>Hello world.</p>
    );
  }
});

render(<App />, bodyMount);

import {Router, Route, browserHistory, Redirect } from 'react-router';
import Body from './components/body.jsx';
import NotFound from './components/404.jsx'
import WelcomeScreen from './components/welcome-screen.jsx'


var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
   render: function() {
      return (
         <Router history={browserHistory}>
            <Redirect from='/' to='/welcome' />
            <Route path='/welcome' component={WelcomeScreen} />
            <Route path='/mars-test' component={Body}/>
            <Route path='*' component={NotFound}/>

         </Router>
      );
   }
});

ReactDOM.render(<App />, document.querySelector('#mountnode'));

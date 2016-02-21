
var React = require('react');
import {browserHistory} from 'react-router';


var Timer = React.createClass({

   getInitialState: function(){
      var seconds = this.getSeconds();

      return {
         secondsElapsed: seconds
      };
   },
   getSeconds: function() {
      if(this.props.startMinutes >= 1) {
         return this.props.startMinutes*60;
      } else {
         return 60;
      }
   },
   secondsLeft: function(){
      return Math.floor(this.state.secondsElapsed%60);
   },
   stopTimer: function(){
      clearInterval(this.interval);
   },
   tick: function(){
      this.setState({secondsElapsed: this.state.secondsElapsed - 1});
      if(this.state.secondsElapsed === 0){
         this.stopTimer();
      }
   },
   minutesLeft: function() {
      return  Math.floor(this.state.secondsElapsed/60);
   },
   start:function (){
      if(!this.interval) {
         this.interval = setInterval(this.tick, 1000);
      }
   },
   displayZero: function() {
      if(this.state.secondsElapsed === 60 || this.state.secondsElapsed < 10) {
         return '0';
      } else {
         return ;
      }
   },
   rejectApplicant: function() {
      if(this.state.secondsElapsed === 0) {
         browserHistory.push('/rejected');
      }
   },
   changeToRed: function() {
      if(this.state.secondsElapsed <10) {
         // change color to red.
      }
   },
   timerEnds: function() {
      if(this.secondsLeft === 0) {
         browserHistory.push('/rejected')
      }
   },
   componentWillReceiveProps: function(nextProps){
      if (nextProps.startHandler === true) {
         this.start();
      };
   },
   render: function(){
      return   (
         <div>
            <span>{this.minutesLeft()}</span>:<span>{this.displayZero()}</span><span>{this.secondsLeft()}</span>
            {this.rejectApplicant()}
         </div>
      );
   }

});

module.exports = Timer;

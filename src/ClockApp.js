import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount () {
    this.timerID = setInterval(() => {
      this.setState({date: new Date()});
    }, 1000);
  }
  componentWillUnmount () {
    clearInterval(this.timerID);
  }
  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class ClockApp extends Component {
  render () {
    return <Clock />;
  }
}

export default ClockApp;

import React, { Component } from 'react';
import ClockApp from './ClockApp';
import ProblemsApp from './ProblemsApp';


// eslint-disable-next-line
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON': 'OFF'}
        </button>
        { this.state.isToggleOn ? <ClockApp /> : <ProblemsApp /> }
      </div> 
    );
  }
}

const withToggle = cb => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    render() {
      return (
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON': 'OFF'}
          </button>
          { cb(this.state.isToggleOn) }
        </div> 
      );
    }
  }
}


function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting({isLoggedIn}) {
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {
        unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

function NumberList({numbers}) {
  return (
    <ul>
      {numbers.map(n => <li>{n}</li>)}
    </ul>
  );
}

const apps = [
  withToggle(isToggleOn => <NumberList numbers={[1,2,3,4,5]}/>),
  withToggle(isToggleOn => <Mailbox unreadMessages={messages} />),
  ClockApp,
  ProblemsApp,
  LoginControl,
  withToggle(isToggleOn => isToggleOn ? <ClockApp /> : <ProblemsApp /> ),
  withToggle(isToggleOn => <Greeting isLoggedIn={isToggleOn} />)
];


class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: (prevState.count + 1) % apps.length
    }));
  }

  render() {
    let Component = apps[this.state.count];
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.count}
        </button>
        <Component />
      </div> 
    );
  }
}

export default Circle;

// App.js
// App.js

import React, { Component } from 'react';
import './styles.css';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleRegister = () => {
    // You can add server-side validation here
    localStorage.setItem('user', JSON.stringify({ username: this.state.username, password: this.state.password }));
    this.setState({ loggedIn: true });
  };

  handleLogin = () => {
    // You can add server-side validation here
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { username, password } = JSON.parse(storedUser);
      if (this.state.username === username && this.state.password === password) {
        this.setState({ loggedIn: true });
      }
    }
  };

  handleLogout = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    return (
      <div className="app">
        {this.state.loggedIn ? (
          <div>
            <h1>Welcome To Your Page {this.state.username}!!!</h1>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="username">
            <h1>User Registration & SignIn</h1>
            <label className="text">
              Username:
              <input  type="text" value={this.state.username} onChange={this.handleUsernameChange} />
            </label><br></br><br></br>
            <label className="text">
              Password:
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </label><br></br><br></br>
            <div className="registerbutton">
            <button onClick={this.handleRegister} type="button" class="btn btn-outline-success">REGISTER</button>
              
              <button onClick={this.handleLogin} type="button" class="btn btn-outline-success">LOGIN</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Register;

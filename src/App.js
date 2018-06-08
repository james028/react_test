import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Change from './change.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      valmail: []
    };
  }

  changeMail = (e) => {
    this.setState({
     email: e.target.value
    })
  }
  
  handleClick = (e) => {
    let mail = this.state.valmail.slice();
    mail.push(this.state.email);

    this.setState({
      valmail: mail,
      email: ''
    })
  }

  render() {
    return (
      <div>
          <Change 
          value={this.state.email}
          placeholder="enter email"
          onChange={this.changeMail}
          maail={this.state.valmail}
          />
          <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      boxText: '',
    }
  }

  updateText(props) {
    this.setState ({
      boxText: props
    })
  }
  render() {
    const { boxText } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input onChange = {event => this.updateText(event.target.value)}/>
          {console.log(this.state.boxText)}
        </p>
        <div> 
          <p>
            {this.state.boxText}
          </p>
        </div>
      </div>
    );
  }
}

export default App;

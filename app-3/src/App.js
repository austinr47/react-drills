import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrFilter: '',
      arrData: ['spaghetti', 'ice cream', 'sushi', 'bolona', 'cheese']
    }
  }

  updateText(filter) {
    this.setState ({
      arrFilter: filter
    })
  }




  render() {
      let returnArr = this.state.arrData.filter((item, index) => {
        return item.includes( this.state.arrFilter);
      }) .map((item, index) => {
        return <h2 key = {index}> {item} </h2>
      })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        <input onChange = {event => this.updateText(event.target.value)}/>
          { returnArr }
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrData: ['spaghetti', 'ice cream', 'sushi', 'bolona', 'cheese']
    }
  }


  render() {
    let displayArr = this.state.arrData.map((item, index) =>{
      return(
      <h2 key = {index} > {item}</h2>
    )
    })
  


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {displayArr}
        </p>
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import Images from './Images';
import ClickNRandom from './ClickNRandom';
import Nav from './Nav';
import './App.css';

// var Shuffle = require('react-shuffle');

class App extends Component {
  render() {
   
    return (
      <div className="App">
      <Nav />

     
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* <Images /> */}

        
        <ClickNRandom />
      </div>
    );
  }
}

export default App;

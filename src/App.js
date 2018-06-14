import React, { Component } from 'react';
import './App.css';
import AppContainer from "./components/AppContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Early Retirement</h1>
        </header>
      <AppContainer />
      </div>
    );
  }
}

export default App;

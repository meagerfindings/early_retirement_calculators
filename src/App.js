import React, { Component } from 'react';
import './App.css';
import AppContainer from "./components/AppContainer";
import PageHeader from "react-bootstrap/es/PageHeader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader className="App-header">
          FI Calculations
        </PageHeader>
      <AppContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Navbar, Bio, Footer} from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>
          Cynthia Pedrasa
        </h1>
        <Bio />
        <Footer />
      </div>
    );
  }
}

export default App;

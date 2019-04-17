import React, { Component } from 'react';
import {Navbar, Header, Bio, Footer} from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Bio />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  Appbar,
  Header,
  Bio,
  Projects,
  Footer
} from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <main>
          <Header />
          <Bio />
          <Projects />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

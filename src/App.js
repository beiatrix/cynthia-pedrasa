import React, { Component } from 'react';
import {
  Navbar,
  Header,
  Bio,
  Experience,
  Education,
  Footer
} from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Header />
          <Bio />
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

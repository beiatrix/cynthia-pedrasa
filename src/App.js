import React, { Component } from 'react';
import {
  Appbar,
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
        <Appbar />
        <main>
          <Header />
          <Bio />
          {/* <Experience />
          <Education /> */}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

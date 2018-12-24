import React, { Component } from 'react';
import './App.css';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Navigation from './components/Navigation.js';
import Parallax from './components/Parallax.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Parallax />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;

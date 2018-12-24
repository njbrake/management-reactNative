import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header.js';
import {Footer} from './components/Footer/Footer.js';
import {About} from './components/About/About.js';
import {Work} from './components/Work/Work.js';
import {Contact} from './components/Contact/Contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

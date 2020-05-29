import React from 'react';
import logo from './logo.svg';
import './App.sass';
import './App.css';
import Home from "./components/Home/Home";
import Footer from "../src/components/Footer/Footer";
import Intro from "../src/components/Intro/Intro";
import Train from "../src/components/Train/Train";

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
      <Intro/>
      <Train/>
      <Footer/>
    </div>
  );
}

export default App;

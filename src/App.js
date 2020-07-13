import React from 'react';
import './App.sass';
import './App.css';
import Home from "./components/Home/Home";
import Footer from "../src/components/Footer/Footer";
import Intro from "../src/components/Intro/Intro";
import Train from "../src/components/Train/Train";


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
      <div><center><button className="button">Let's go!</button></center></div>
      <br></br>
      <Intro/>
      <Train/>
      <Footer/>
    </div>
  );
}

export default App;

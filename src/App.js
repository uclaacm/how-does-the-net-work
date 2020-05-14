import React from 'react';
import logo from './logo.svg';
import './App.sass';
import './App.css';
import Home from "./components/Home/Home";
import Footer from "../src/components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
      <Footer/>
    </div>
  );
}

export default App;

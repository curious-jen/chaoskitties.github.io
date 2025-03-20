import React from 'react';
import './App.css';
import logo from './assets/cklogo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Kitty Automation Services</h1>
        <p>We provide top-notch automation services for your feline friends.</p>
        <p>From automated litter boxes to self-filling food dispensers, we've got you covered.</p>
      </header>
    </div>
  );
}

export default App;

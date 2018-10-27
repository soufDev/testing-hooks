import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Button() {
  let [value, setValue] = useState(0);
  function handleOnClick() {
    setValue(value+1);
  }
 return (
    <button onClick={handleOnClick}>{value}</button>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />
      </header>
    </div>
  );
}

export default App;

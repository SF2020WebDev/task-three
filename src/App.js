import React from 'react';
import logo from './logo.svg';
import './App.css';
import Details from './components/details.js'
import UpdateDetails from './components/updateDetails';

function App() {
  return (
    <div className="App">
          <UpdateDetails />
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainBox from './components/mainbox';
import Results from './components/pages/results';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainBox/>
        <Results/>
      </header>
    </div>
  );
}

export default App;

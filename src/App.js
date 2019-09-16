import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DogsListContainer />
      </header>
    </div>
  );
}

export default App
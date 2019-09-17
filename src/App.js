import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DogsListContainer />

        <Route exact path="/dog-breeds/:breed" component={DogsListContainer} />
      </header>
    </div>
  );
}

export default App
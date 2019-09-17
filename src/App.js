import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import DogBreedsImagesContainer from './components/DogBreedsImagesContainer';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={DogsListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedsImagesContainer} />

      </header>
    </div>
  );
}

export default App
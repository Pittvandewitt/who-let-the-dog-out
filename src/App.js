import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import DogBreedsImagesContainer from './components/DogBreedsImagesContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DogsListContainer />
        <DogBreedsImagesContainer/>

      </header>
    </div>
  );
}

export default App
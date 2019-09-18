import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom'
import DogBreedsImagesContainer from './components/DogBreedsImagesContainer';

function App() {
    return <div className="App">
      <header className="App-header">
        <Route exact path="/" component={DogsListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedsImagesContainer} />
      </header>
    </div >
}

export default App

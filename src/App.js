import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DogBreedsImagesContainer from './components/DogBreedsImagesContainer';
import Home from './components/Home'
import Game1 from './components/Game1'
import Game2 from './components/Game2'
import Game3 from './components/Game3'

function App() {
  return <div className="App">
    <header className="App-header">
      <Router>
        <div>
          <nav id="components-btn">
            <button className="btn" ><Link className="components-btn" to="/">Home</Link></button>
            <button className="btn" ><Link className="components-btn" to="/dog-list/">Dog List</Link></button>
            <button className="btn" ><Link className="components-btn" to="/game1/">Game 1</Link></button>
            <button className="btn" ><Link className="components-btn" to="/game2/">Game 2</Link></button>
            <button className="btn" ><Link className="components-btn" to="/game3/">Game 3</Link></button>
          </nav>
         


          <Route exact path="/" component={Home} />
          <Route path="/dog-list" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedsImagesContainer} />
          <Route path="/game1" component={Game1} />
          <Route path="/game2" component={Game2} />
          <Route path="/game3" component={Game3} />

        </div>
      </Router>
    </header>
  </div >
}


export default App
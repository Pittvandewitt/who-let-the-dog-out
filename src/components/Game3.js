import React, { Component } from 'react';
import Game1 from './Game1'
import Game2 from './Game2';

class Game3 extends Component {
  state = {
    score: 5
  }

  render() {
    return this.state.score > 5 ? <div><Game1 /></div> : <div><Game2 /></div>

  }
}

export default (Game3)
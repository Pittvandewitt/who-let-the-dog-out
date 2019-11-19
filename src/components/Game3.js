import React, { Component } from 'react';
import Game1 from './Game1'
import Game2 from './Game2';
import { connect } from 'react-redux'

class Game3 extends Component {
  state = {
    score: 0
  }

  updateScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  };

  render() {
    return this.state.score % 2 === 0 ? <div><Game1 updateScore={this.updateScore} /></div> : <div><Game2 updateScore={this.updateScore} /></div>
  }
}

const mapStateToProps = (state) => {
  return { score: state }
}

export default connect(mapStateToProps)(Game3)
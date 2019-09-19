import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDogs } from '../actions/SetDogObjects'
import { getRandomDogObject } from '../actions/gameFunctions'
import { shuffle } from '../actions/gameFunctions'

class Game2 extends Component {
  state = {
    score: 0,
    level: 2
  }

  componentDidMount() {
    this.props.getDogs()
  }

  getIntInRange = (range) => Math.floor(Math.random() * range.length - 1)

  verifyAnswer = (data) => (event) => {
    const clickedButtonName = event.target.firstChild.data
    const correctAnswer = clickedButtonName === data[0].breed
    window.alert("That's " + correctAnswer)
    const scoreIncrease = correctAnswer ? 1 : 0
    const levelIncrease = this.state.score % 5 === 0 ? 1 : 0 // Edit difficulty here
    this.setState({ score: this.state.score + scoreIncrease, level: this.state.level + levelIncrease })
  }

  render() {
    if (!this.props.dogs.length > 0) return <div>Loading...</div>

    const data = getRandomDogObject(this.props.dogs, this.state.level)
    const buttons = []
    for (let i = 0; i < this.state.level; i++)
      buttons.push(<button onClick={this.verifyAnswer(data)}>{data[i].breed}</button>)

    return <div>
      <h1>What breed is this?</h1>
      <div><img src={data[0].images[this.getIntInRange(data[0].images)]} alt='dog'></img></div>
      {shuffle(buttons).map(element => element)}
      <div><text>Score: {this.state.score}</text></div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return { dogs: state }
}

export default connect(mapStateToProps, { getDogs })(Game2)
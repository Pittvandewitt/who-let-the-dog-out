import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDogs } from '../actions/SetDogObjects'
import shuffle from '../actions/Shuffle'

class Game2 extends Component {
  state = {
    score: 0
  }

  componentDidMount() {
    this.props.getDogs()
  }

  getImage(collection) {
    const dog = collection[this.getIntInRange(collection)]
    const correctAnswer = dog.breed
    const wrongAnswer = collection[this.getIntInRange(collection)].breed
    const wrongAnswer1 = collection[this.getIntInRange(collection)].breed
    const image = dog.images[this.getIntInRange(dog.images)]
    return { correctAnswer, wrongAnswer, wrongAnswer1, image }
  }

  getIntInRange = (range) => Math.floor(Math.random() * range.length - 1)

  verifyAnswer = (data) => (event) => {
    const clickedButtonName = event.target.firstChild.data
    window.alert("That's " + (clickedButtonName === data.correctAnswer))
    const increase = clickedButtonName === data.correctAnswer ? 1 : 0
    this.setState({ score: this.state.score + increase })
  }

  render() {
    if (!this.props.dogs.length > 0) return <div>Loading...</div>

    const data = this.getImage(this.props.dogs)
    const buttons = [
      <button onClick={this.verifyAnswer(data)}>{data.correctAnswer}</button>,
      <button onClick={this.verifyAnswer(data)}>{data.wrongAnswer}</button>,
      <button onClick={this.verifyAnswer(data)}>{data.wrongAnswer1}</button>
    ]

    return <div>
      <h1>What breed is this?</h1>
      <div>
        <div><img src={data.image} alt='dog'></img></div>
        {shuffle(buttons).map(element => element)}
        <div><text>Score: {this.state.score}</text></div>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return { dogs: state }
}

export default connect(mapStateToProps, { getDogs })(Game2)
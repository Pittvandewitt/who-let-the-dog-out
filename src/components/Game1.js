import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDogs } from '../actions/SetDogObjects'
import { getRandomDogObject, shuffle, calculateScore } from '../actions/gameFunctions'
import Timer from "../components/Timer";
import '../style/game1.css'

class Game1 extends Component {
  state = {
    score: 0,
    wrong: 0,
    activateTimer: false,
    gameOver: false
  }

  componentDidMount() {
    this.props.getDogs()
  }

  handleClick = (event) => {
    if (event.target.name === 'correct') {
      alert('Good your answer is correct')
      this.setState({ score: this.state.score + 1, activateTimer: true })
      this.props.updateScore && this.props.updateScore()
    } else {
      alert('Sorry your answer is wrong')
      setTimeout(this.nextQuestion, 2000)
    }
  }

  nextQuestion = () => {
    this.setState({ wrong: this.state.wrong + 1, activateTimer: true })
    if (this.state.wrong === 3) {
      alert('You got 3 answers wrong')
      this.setState({ gameOver: true, activateTimer: false })
    }
  }

  resetTimer = () => {
    this.setState({
      activateTimer: false,
      gameOver: true
    });
  };

  resetCounterOnTimer = () => {
    return 10
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('enter press here! ')
    }
  }

  tryAgain = () => {
    this.setState({ gameOver: false, score: 0, wrong: 0 })
  }

  randomNumber = (array) => Math.floor((Math.random() * array.length))

  gameOver = () => {
    return <div>
      <h1 className="gameOverHeader">Game Over</h1>
      <button className='gameOver-btn' onClick={this.tryAgain}>Try again</button>
    </div>
  }

  game = () => {
    if (!this.props.breeds.length > 0) return <div>Loading...</div>

    const dogObjects = getRandomDogObject(this.props.breeds, 3)
    const correctbreed = dogObjects[0].breed.charAt(0).toUpperCase() + dogObjects[0].breed.substring(1)
    const correctImage = dogObjects[0].images[this.randomNumber(dogObjects[0].images)]
    const image1 = dogObjects[1].images[this.randomNumber(dogObjects[1].images)]
    const image2 = dogObjects[2].images[this.randomNumber(dogObjects[2].images)]
    const buttons = [
      <button><img onClick={this.handleClick} name={'wrong'} src={image1} width="200px" alt="" /></button>,
      <button><img onClick={this.handleClick} name={"wrong"} src={image2} width="200px" alt="" /></button>,
      <button><img onClick={this.handleClick} name={'correct'} src={correctImage} width="200px" alt="" /></button>
    ]

    return <div>
      <h1>Choose the correct image</h1>
      <h3 className="question">Which image is {correctbreed} breed?</h3>
      {shuffle(buttons)}
      <h3>Your Score is : {this.state.score}</h3>
      <h3>Percentage : {calculateScore(this.state.wrong, this.state.score)}</h3>
      <h3>Your wrong answers : {this.state.wrong}</h3>

      <h3>Time left:
      <Timer
        activateTimer={this.state.activateTimer}
        resetTimer={this.resetTimer}
        test={this.resetCounterOnTimer}
      /></h3>
    </div>
  }

  render() {
    return <div>{!this.state.gameOver ? this.game() : this.gameOver()}</div>
  }
}

const mapStateToProps = (state) => {
  return { breeds: state }
}

export default connect(mapStateToProps, { getDogs })(Game1)
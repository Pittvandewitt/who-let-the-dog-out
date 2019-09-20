import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDogs } from '../actions/SetDogObjects'
import { getRandomDogObject, shuffle, calculateScore } from '../actions/gameFunctions'
import Timer from "../components/Timer";

class Game2 extends Component {
  state = {
    score: 0,
    wrong: 0,
    level: 3,
    activateTimer: false,
    gameOver: false
  }

  componentDidMount() {
    this.props.getDogs()
  }

  getIntInRange = (range) => Math.floor(Math.random() * range.length)

  verifyAnswer = (event) => {
    if (event.target.name === 'correct') {
      const updateScore = this.state.score % 5 === 1 ? 1 : 0
      this.setState({
        score: this.state.score + 1,
        level: this.state.level + updateScore,
        activateTimer: true
      })
    } else {
      window.alert("That's " + event.target.name)
      setTimeout(this.nextQuestion(), 2000)
    }
  }

  nextQuestion = () => {
    this.setState({
      wrong: this.state.wrong + 1,
      activateTimer: true
    })
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

  render() {
    if (!this.props.dogs.length > 0) return <div>Loading...</div>
    if (this.state.gameOver) return <div>
      <h2>Game Over! Better luck next time</h2>
      <button onClick={this.tryAgain}>Try again</button>
    </div>

    const data = getRandomDogObject(this.props.dogs, this.state.level)
    const buttons = []
    for (let i = 0; i < this.state.level; i++)
      i === 0 ?
        buttons.push(<button onKeyPress={this.handleKeyPress} tabIndex="0" name={'correct'} onClick={this.verifyAnswer}>{data[i].breed}</button>) :
        buttons.push(<button onKeyPress={this.handleKeyPress} name={'wrong'} onClick={this.verifyAnswer}>{data[i].breed}</button>)

    return <div>
      <h1>What breed is this?</h1>
      <div><img className="img" src={data[0].images[this.getIntInRange(data[0].images)]} alt='Source seems to be broken'></img></div>
      {shuffle(buttons)}
      <h3><div>Score: {this.state.score}</div></h3>
      <h3>Percentage : {calculateScore(this.state.wrong, this.state.score)}</h3>

      <h3>Time left:
          <Timer
        activateTimer={this.state.activateTimer}
        resetTimer={this.resetTimer}
      /></h3>
    </div>

  }

}


const mapStateToProps = (state) => {
  return { dogs: state }
}

export default connect(mapStateToProps, { getDogs })(Game2)
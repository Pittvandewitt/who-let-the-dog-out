import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDogs } from '../actions/SetDogObjects'
import shuffle from '../actions/shuffle'
import '../style/game1.css'

class Game1 extends Component {
  state = {
    score: 0,
    wrong: 0,
    gameOver: false,
    showHint: false
  }
  componentDidMount() {
    this.props.getDogs()
  }
  
  handleClick = (event) => {
    if (event.target.name === 'correct') {
      alert('Good your answer is correct')
     this.setState({
        score: this.state.score + 1,
      })
      this.state.score === 4?alert('Good job you have 5 correct answers'): this.setState({
        score: this.state.score + 1
      })

    } else {
      alert(' Sorry your answer is wrong')
      this.setState({ wrong: this.state.wrong + 1 })
      if (this.state.wrong === 2) {
        alert('You got 3 answers wrong')
        this.setState({ gameOver: true })
       
      }
    }
  }

  getHint=(event)=>{
    if(event.target.querySelector('img').className==="hide"){
       event.target.querySelector('img').className="show"
    }else{
  event.target.querySelector('img').className="hide"
}
  }
 

  tryAgain = () => {
    this.setState({ gameOver: false })
    this.setState({ score: 0 })
    this.setState({ wrong: 0 })
  }

  randomNumber(array) {
    return Math.floor((Math.random() * array.length))
  }
  gameOver = () => {
    return <div>
      <h1 className="gameOverHeader">Game Over</h1>
      <button className='gameOver-btn' onClick={this.tryAgain}>Try again</button>
    </div>
  }
  game = () => {
    const breeds = this.props.breeds
    const correctDog = breeds.length > 0 ? breeds[this.randomNumber(breeds)] : "Loading..."
    const correctbreed = correctDog.breed !== undefined
      ? correctDog.breed.charAt(0).toUpperCase() + correctDog.breed.substring(1) : "loading..."
    const correctImage = correctDog.images !== undefined
      ? correctDog.images[this.randomNumber(correctDog.images)] : "loading..."
    const Images = breeds.map(dog => dog.images[this.randomNumber(dog.images)])
    
    const mix = [
      <button key={1}><img onClick={this.handleClick} name={'wrong'} src={Images[this.randomNumber(Images)]} width="200px" alt="" /></button>,
      <button key={2} ><img onClick={this.handleClick} name={"wrong"} src={Images[this.randomNumber(Images)]} width="200px" alt="" /></button>,
      <button key={3} ><img onClick={this.handleClick} name={'correct'} src={correctImage} width="200px" alt="" /></button>]
    
    return <div>
      
      <h1>Choose the correct image</h1>
      <h3 className="question">Which image is {correctbreed} breed?</h3>
      {shuffle(mix)}
      <h3 >Your Score is : {this.state.score}</h3>
      <h3 >Your wrong answers : {this.state.wrong}</h3>
      {/* <button onClick={this.getHint}><img  className="hide" src={correctImage} width="200px" alt="" />Hint</button> */}
    </div>
  }

  render() { 
    return <div>{!this.state.gameOver ? this.game() : this.gameOver()
    }
    </div>
  }
}
const mapStateToProps = (state) => {
  return {
    breeds: state
  }
}
export default connect(mapStateToProps, { getDogs })(Game1)


import React, { Component } from "react";
import { getDogs } from "../actions/SetDogObjects";
import { connect } from "react-redux";
import shuffle from "../actions/shuffle";
import Timer from "../components/Timer";
import "../style/game3.css";
//import classNames from 'classnames';

class Game3 extends Component {
  state = {
    urls: null,
    name: "",
    thisGameOver: false,
    score: 0,
    level: 0,
    bool: false,
    badScore: 0,
    counter: 10
  };
  // update = (value) => {
  //   return () => {
  //      this.setState({
  //        gameOver: value
  //      });
  //   }
  // }
  componentDidMount() {
    this.props.getDogs();
  }
  resetTimimg = () => {
    this.setState({
      bool: false
    });
  };

  handleClick = () => {
    const rand = Math.floor(Math.random() * 80);
    this.setState({
      thisGameOver: false,
      urls: this.props.dogs[rand].images.slice(0, 3),
      name: this.props.dogs[rand].breed,
      bool: true
    });
    //this.startGame();
  };

  resetCounterOnTimer = () => {
    return this.state.counter-5;
  };
  startGame = () => {
    return false;
  };

  handleAnswer = event => {
    if (event.target.innerText === this.state.name) {
      this.setState({ score: this.state.score + 1 });
      this.handleClick();
    } else {
      this.setState({ badScore: this.state.badScore + 1 });
      this.handleClick();
    }
  };

  getBreeds = () => {
    const len = this.props.dogs.length - 1;
    const getRand = () => Math.floor(Math.random() * len);

    return [
      this.props.dogs[getRand()].breed,
      this.props.dogs[getRand()].breed,
      this.state.name
    ];
  };

  makeButtons = () => {
    const arr = this.state.urls ? this.getBreeds() : [];
    return shuffle(arr).map(breed => (
      <button onClick={this.handleAnswer}>{breed}</button>
    ));
  };

  render() {
    return (
      <div>
        <h3>Game3</h3>
        <h4>
          Your level is{" "}
          {this.state.level < 10
            ? `${this.state.level}:  it is too litle to move up to the next level`
            : "good"}
        </h4>
        <h4>good score {this.state.score}</h4>
        <h4>bad score {this.state.badScore}</h4>
        <h4>
          Time component counter:
          <Timer
            bool={this.state.bool}
            resetTiming={this.resetTimimg}
            resetCounterByClickOnParentBtns={this.resetCounterOnTimer}
            startGame={this.startGame}
          />
        </h4>

        <div>
          <button onClick={this.handleClick}>Play</button>
        </div>
        <div className="image-container">
          {this.state.thisGameOver
            ? "GAME OVER"
            : this.state.urls
            ? this.state.urls.map(url => <img key={url} src={url} />)
            : ""}
        </div>
        {this.state.urls ? this.makeButtons() : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogs: state
  };
};

export default connect(
  mapStateToProps,
  { getDogs }
)(Game3);

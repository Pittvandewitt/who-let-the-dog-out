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
    gameOver: false,
    score: 0,
    level: 0,
    bool: false,
    badScore: 0,
    counter: 10
  };
  update = (value) => {
    return () => {
       this.setState({
         counter: value
       });
    }
  }
  componentDidMount() {
    this.props.getDogs();
  }
  reset = () => {
    this.setState({
      bool: false
    });
  };

  handleClick = () => {
    const rand = Math.floor(Math.random() * 80);
    this.setState({
      gameOver: false,
      urls: this.props.dogs[rand].images.slice(0, 3),
      name: this.props.dogs[rand].breed,
      bool: true
    });
    //this.resetCounterOnTimer()
  };

  resetCounterOnTimer = () => {
    return 10
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
    console.log(this.state.counter)
    // let btnClass = classNames("button", "button--wayra", "button--border-thick", "button--text-upper", "button--size-s" )
    // let btnClass2 = classNames("box", "bg-1")
    return (
      <div>
        <h3>Game3</h3>
        <h4>
          Your level is{" "}
          {this.state.level < 10
            ? `${this.state.level}:  it is too litle to move up to the next level`
            : "good"}
        </h4>
        <h4>
          Time component counter:
          <Timer
            bool={this.state.bool}
            reset={this.reset}
            test={this.resetCounterOnTimer}
            data={this.update}
          />
        </h4>

        <div>
          <button onClick={this.handleClick}>Play</button>
        </div>
        <div className="image-container">
          {this.state.gameOver
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

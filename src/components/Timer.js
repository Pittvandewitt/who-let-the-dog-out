import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    counter: 10,
    gameOver: false,
    go: true
  };
  componentWillReceiveProps() {
    this.setState({
        //pass counter from parent equal to 10. 
        //Will be decreased on the game progress
        //this is trigered on parent's buttons (play game and answer btns)
        counter: this.props.resetCounterByClickOnParentBtns(),
        gameOver: this.props.startGame(),
    })
    if (!this.state.gameOver )  {
        this.time()
    } 
  }

  componentDidUpdate(prevProps) {
    //when parent state.bool is true start counting down   
    if (prevProps.bool !== this.props.bool) {
      this.time();
    }

  }

  time = () => {
    if (this.props.bool) {
      const interv = setInterval(() => {
        this.setState({
          counter: this.state.counter - 1,
        });
        if (this.state.counter === 0) {
          clearInterval(interv);
          this.setState({
            gameOver: true
          });
        }
      }, 1000);
    } 
  };
  gameOver = () => {
      return <div>Game Over</div>
  }
  render() {
      console.log('is game over: ',this.state.gameOver)
    return (
     this.state.gameOver? this.gameOver() : <div>{this.state.counter}</div> 
    );
  }
}

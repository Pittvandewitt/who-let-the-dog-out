import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    counter: 10
  };

  componentWillReceiveProps() {
    this.setState({
      //pass counter from parent equal to 10. 
      //Will be decreased on the game progress
      //this is trigered on parent's buttons (play game and answer btns)
      counter: 10
    })
  }

  componentDidUpdate(prevProps) {
    //when parent state.activateTimer is true start counting down   
    if (prevProps.activateTimer !== this.props.activateTimer) {
      this.time();
    }
  }

  time = () => {
    if (this.props.activateTimer) {
      const interv = setInterval(() => {
        this.setState({
          counter: this.state.counter - 1
        });
        if (this.state.counter <= 0) {
          clearInterval(interv);
          //   this.setState({
          //     counter: 10
          //   });
          this.props.resetTimer();
          // this.props.data(0);
        }
      }, 1000);
    } else {
      clearInterval(this.interval);
    }
  };

  render() {
    return <div>{this.state.counter}</div>;
  }
}

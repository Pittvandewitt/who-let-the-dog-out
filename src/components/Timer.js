import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    counter: 8
  };
  componentWillReceiveProps() {
    this.setState({
        //pass counter from parent equal to 10. 
        //Will be decreased on the game progress
        //this is trigered on parent's buttons (play game and answer btns)
        counter: this.props.test()
    })
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
          counter: this.state.counter - 1
        });
        if (this.state.counter <= 2) {
          clearInterval(interv);
        //   this.setState({
        //     counter: 10
        //   });
        this.props.reset();
        // this.props.data(0);
        }
      }, 500);
    } else {
      clearInterval(this.interval);
    }
  };

  render() {
    return <div>{this.state.counter}</div>;
  }
}

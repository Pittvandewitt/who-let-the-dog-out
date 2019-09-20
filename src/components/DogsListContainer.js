import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDogs } from '../actions/SetDogObjects'
import DogsList from './DogsList'

class DogsListContainer extends Component {

  componentDidMount() {
    this.props.getDogs()
  }

  render() {
    return this.props.dogs.length > 0 ? <DogsList list={this.props.dogs} /> : 'Loading...'
  }
}

const mapStateToProps=(state)=>{
  return{
    dogs: state
  }
}

export default connect(mapStateToProps, { getDogs })(DogsListContainer)
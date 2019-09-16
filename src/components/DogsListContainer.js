import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import SetDogsList from '../actions/SetDogsList'
import DogsList from './DogsList'

class DogsListContainer extends Component {

  componentDidMount() {
    request('https://dog.ceo/api/breeds/list/all')
      .then(data => this.props.SetDogsList(Object.keys(data.body.message)))
      .catch(error => console.log(error))
  }

  render() {
    return <DogsList list={this.props.dogs} />
  }
}

const mapStateToProps = (state) => {
  return { dogs: state.reducer }
}

export default connect(mapStateToProps, { SetDogsList })(DogsListContainer)
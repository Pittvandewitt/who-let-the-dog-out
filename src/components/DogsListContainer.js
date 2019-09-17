import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import SetDogsList from '../actions/SetDogsList'
import SetDogsImages from '../actions/SetDogsImages'
import DogsList from './DogsList'

class DogsListContainer extends Component {

  componentDidMount() {
    request('https://dog.ceo/api/breeds/list/all')
      .then(data => this.props.SetDogsList(Object.keys(data.body.message)))
      .then(data => data.message.map((breed, idx) => this.props.SetDogsImages(request(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`))))
      .catch(error => console.log(error))
  }

  render() {
    return <DogsList list={this.props.dogs} />
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
    images: state.dogs[1],
    isShown: false
  }
}

export default connect(mapStateToProps, { SetDogsList, SetDogsImages })(DogsListContainer)
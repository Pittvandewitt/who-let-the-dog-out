import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import SetDogObjects from '../actions/SetDogObjects'
import DogsList from './DogsList'

class DogsListContainer extends Component {

  componentDidMount() {
    request('https://dog.ceo/api/breeds/list/all')
      .then(data => {
        const promises = Object.keys(data.body.message).map(dog => {
          return request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images`)
            .then(data => ({ breed: dog, images: data.body.message }))
        })

        Promise.all(promises).then(responses => this.props.SetDogObjects(responses))
      })
      .catch(error => console.log(error))
  }

  render() {
    return this.props.dogs.length > 0 ? <DogsList list={this.props.dogs} /> : 'Loading...'
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state
  }
}

export default connect(mapStateToProps, { SetDogObjects })(DogsListContainer)
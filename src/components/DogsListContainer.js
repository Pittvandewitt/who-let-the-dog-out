import React, { Component } from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import DogsList from './DogsList'
import SetDogObjects from '../actions/SetDogObjects'

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
      .catch(error => {
        window.alert('An error occured while fetching data. Try reloading the page')
        console.log(error)
      })
  }

  render() {
    return this.props.dogs.length > 0 ? <DogsList list={this.props.dogs} /> : 'Loading...'
  }
}

const mapStateToProps = (state) => {
  return { dogs: state }
}

export default connect(mapStateToProps, { SetDogObjects })(DogsListContainer)
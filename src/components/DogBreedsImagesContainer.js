import React, { Component } from 'react'
import { connect } from 'react-redux'
import DogBreedsImages from './DogbreedsImages'
import { getDogs } from '../actions/SetDogObjects'

class DogBreedImagesContainer extends Component {

  componentDidMount() {
    this.props.getDogs()
  }

  render() {
    const breed = this.props.match.params.breed
    const object = this.props.images.find(imageArray => breed === imageArray.breed)
    return this.props.images.length !== 0 ? <DogBreedsImages images={object.images} /> : 'Loading...'
  }
}

const mapStateToProps = (state) => {
  return {
    images: state
  }
}

export default connect(mapStateToProps, { getDogs })(DogBreedImagesContainer)
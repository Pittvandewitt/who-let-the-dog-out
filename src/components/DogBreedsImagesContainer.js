import React, {Component} from 'react'
import DogBreedsImages from './DogbreedsImages'
import request from 'superagent'
import updateImages from '../actions/updateImages'
import { connect } from 'react-redux'


 class DogBreedImagesContainer extends Component {
  state = { images: null }

  componentDidMount() {
    const breed = this.props.match.params.breed
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(response => this.props.updateImages(response.body.message))
      .catch(console.error)
  }

  render() {
    return <DogBreedsImages images={ this.props.images } />
  }
}

const mapStateToProps=(state)=>{
  return{
    images: state.images
  }
}
export default connect(mapStateToProps,{updateImages})(DogBreedImagesContainer)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDogs } from '../actions/SetDogObjects'

class Game1 extends Component {
  componentDidMount() {
    this.props.getDogs()
  }
 
  randomNumber(numm){
    return Math.floor((Math.random() * numm.length))}
   
  render() {
    this.randomNumber(this.props.breeds)
    const breeds = this.props.breeds
    /* بدال الخط الي تحت جيب الاوبجيكت كلها واختار الصوره والبريد مع بعض */
    const dogBreeds = breeds.map(dog =>  <span>{dog.breed.charAt(0).toUpperCase()+ dog.breed.substring(1)}</span>)
    const Images =  breeds.map(dog => dog.images[this.randomNumber(dog.images)])
      console.log('random image',Images[this.randomNumber(Images)])
      console.log('random image',Images[this.randomNumber(Images)])
    const correctDog = dogBreeds[this.randomNumber(dogBreeds)]
    return <div>
      <h1>Choose the correct image</h1>
      <h3>Which image is {correctDog} breed?</h3>
     
      <img src={Images[this.randomNumber(Images)]} width="300px" alt=""/>
      <img src={Images[this.randomNumber(Images)]} width="300px" alt=""/>
      {/* <img src={correctDog.images[1]} width="300px" alt=""/> */}
      

    </div>
  }
}
const mapStateToProps = (state) => {
  return {
    breeds: state
  }
}
export default connect(mapStateToProps, { getDogs })(Game1)


// const breeds = this.props.breeds
//     const random = Math.floor((Math.random() * 87))
//     const random2=Math.floor((Math.random() * 87))
//     const randomBread= breeds[random]
//     console.log(random)
//     console.log('AAAA',breeds[random])
//     return <div>
//       <h1>Choose the right image</h1>
//        <h2>Which image is {randomBread} breed? </h2>
//        {console.log('IMAGES',this.props.images[random2])}
//        <img src={this.props.images[random2]} alt=""/>
//     </div>
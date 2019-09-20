import React from 'react';
import { Link } from 'react-router-dom'
import './DogBreedsImages.css'

export default function DogBreedsImages(props) {

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const shuffledArray = shuffle(props.images)

  const images = props.images !== null
    ? shuffledArray.slice(0, 10).map(image => <img key={image} src={image} alt="" />)
    : 'Loading...'

  return <div>
    <h1>Image details</h1>
    <div>{images}</div>
    <button className="btn"><Link to="/dog-list">Go back to the index</Link></button>
  </div>
}

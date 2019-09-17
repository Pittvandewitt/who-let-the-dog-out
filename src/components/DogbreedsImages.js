import React from 'react';
import { Link } from 'react-router-dom'

export default function DogBreedsImages(props) {
  
  const images = (props.images !== null
    ? props.images.slice(0, 10).map(image => <img key={image} src={image} width="200px" alt="" />)
    : 'Loading...')
  
  return <div>
    <h1>IMAGES DETAILS</h1>
    <Link to="/">Go back to the index</Link>
    {images}
    {}
  </div>
}

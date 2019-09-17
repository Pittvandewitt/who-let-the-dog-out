import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogsList extends Component {

  openImages(breed) {
    return <li key={breed}> 
      <Link>{breed}</Link>
    </li>
  }

  render() {
    return <div>
      <h1>Dogs List</h1>
      <ul>
        {this.props.list.map(object => {
          return this.openImages(object.breed)
        })}
      </ul>
    </div>
  }
}
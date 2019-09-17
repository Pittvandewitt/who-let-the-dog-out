import React, { Component } from 'react'

export default class DogsList extends Component {
  render() {
    return <div>
      <h1>Dogs List</h1>
      <ul>
        {this.props.list !== null ? this.props.list.map(object => <li>{object.breed}</li>) : 'Loading...'}
      </ul>
    </div>
  }
}
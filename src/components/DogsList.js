import React, { Component } from 'react'

export default class DogsList extends Component {

  render() {
    return <div>
      <h1>Dogs List</h1>
      <ul>
        {console.log('stuff to log', this.props.list)}
        {/* {this.props.list !== null ? this.props.list.map(breed => <li>{breed}</li>) : 'Loading...'} */}
      </ul>
    </div>
  }
}
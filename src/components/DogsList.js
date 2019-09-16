import React, { Component } from 'react'

export default class DogsList extends Component {
  componentDidMount() {
    console.log('mount', this.props)
  }

  render() {
    // console.log(this.props)
    // const breeds = this.props.list !== null
    //   ? this.props.list.map(breed => { console.log(breed); return <li>fdafd</li> })
    //   : 'Loading...'
    return <div>
      <h1>Dogs List</h1>
      {/* {console.log(breeds)} */}


      {/* I{breeds.map(breed => <li>{breed}</li>)} */}
    </div>
  }
}
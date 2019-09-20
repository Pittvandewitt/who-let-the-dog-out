import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogsList extends Component {

  render() {
    return <div>
      <h1>Dogs List</h1>
      <ul className='dog-list'>
        {this.props.list === null ? 'Loading...' :
          this.props.list.map(({ breed }, index) =>
            <li className='list' key={index}>
              <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
            </li>)
        }
      </ul>
    </div>
  }
}
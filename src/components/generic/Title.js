import React, { Component } from 'react'
import '../../styles/generic/Title'

export default class Title extends Component {
  render () {
    return (
      <h1 className='title'>
        {this.props.title}
      </h1>
    )
  }
}

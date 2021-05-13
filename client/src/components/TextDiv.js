import React, { Component } from 'react'

export default class TextDiv extends Component {

  
  render() {
    const text = this.props.text;

    return (
      <div >
        <h3>{text.title}</h3>
        <h4>{text.author}</h4>
        <h4>{text.genre}</h4>
        <p>{text.body.slice(0,300) + '...'}</p>

      </div>
    )
  }
}

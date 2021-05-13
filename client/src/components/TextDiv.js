import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class TextDiv extends Component {

  
  render() {
    const text = this.props.text;

    return (
      <div >
        <Link to={`/texts/${text._id}`}><h3>{text.title}</h3></Link>
        <h4>{text.author}</h4>
        <h4>{text.genre}</h4>
        <p>{text.body.slice(0,300) + '...'}</p>

      </div>
    )
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class TextDiv extends Component {

  
  render() {
    const text = this.props.text;

    return (
      <div class="w-96 m-10 bg-gray-50 p-6 shadow-lg">
        <Link to={`/texts/${text._id}`} ><h3 class="text-2xl">{text.title}</h3> </Link>
        <h4 class="text-xl">{text.author}</h4>
        <h4 class="italic p-1">{text.genre.join('')}</h4>
        <p>{text.body.slice(0,300) + '...'}</p>

      </div>
    )
  }
}

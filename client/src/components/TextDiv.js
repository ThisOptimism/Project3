import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TextDiv extends Component {

  render() {
    const text = this.props.text;
    console.log(text);

    return (
      <div class="m-4 bg-gray-50 p-6 shadow-xl  bg-white bg-opacity-75 ">
        <Link to={`/texts/${text._id}`} ><h3 class="text-2xl">{text.title}</h3> </Link>
        <h4 class="text-xl">{text.author}</h4>
        <h4 class="italic p-1">{text.genre.join('')}</h4>
        <p>{text.body.slice(0,300) + '...'}</p>
      </div>
    )

  }
}

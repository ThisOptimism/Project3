import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TextDiv extends Component {
  state = {
    imgUrl: this.props.text.imgUrl,
  }

  componentDidMount = () => {
    //set default images for texts without
    if(!this.props.text.imgUrl) {
      let newImgUrl;
      if (this.props.text.type === 'poem') {
          newImgUrl = "https://res.cloudinary.com/dcznwiht6/image/upload/v1621511450/poetry_2_cnikns.jpg"
      } else if (this.props.text.type === 'book') {
          newImgUrl = "https://res.cloudinary.com/dcznwiht6/image/upload/v1621511360/book_4_f6dhpp.jpg"
      } else {
          newImgUrl = "https://res.cloudinary.com/dcznwiht6/image/upload/v1621511530/article_2_wijko3.jpg"
      }
    this.setState({
      imgUrl: newImgUrl
    })
  }
  }
  
  render() {
    const text = this.props.text;
    console.log(text);

    return (
      <Link to={`/texts/${text._id}`} >
        <div class="m-4 h-62 bg-gray-50 shadow-xl hover:bg-opacity-90 bg-white bg-opacity-75 flex justify-between">
        <img src={this.state.imgUrl} className="w-1/6 h-full object-cover object-left-top  hidden sm:inline" />
        <div className="p-6 w-5/6">
          <h3 class="text-2xl">{text.title}</h3>
          <h4 class="text-xl">{text.author}</h4>
          <h4 class="italic p-1">{text.genre.join('')}</h4>
          <p>{text.body.slice(0,300) + '...'}</p>          
        </div>
      </div>
      </Link>
    )

  }
}

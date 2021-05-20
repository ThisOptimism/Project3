import axios from 'axios'
import React, { Component } from 'react';
import Select from 'react-select';
import service from '../services/imgUpload';

export default class AddText extends Component {
  state = {
    showForm: false,
    genre: [],
    imgUrl: ''
  }

  closeForm = () => {
    this.setState({
      showForm: false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
      
    const { title, author, releaseDate, type, genre, body, imgUrl } = e.target;
    let selectedGenre = [];
    if (genre.length > 1) {
      genre.forEach(genre => {
        selectedGenre.push(genre.value)
      })
    } else { selectedGenre = genre.value }

    axios.post('/api/textList/addText', {
      title: title.value,
      author: author.value,
      releaseDate: new Date(releaseDate.value),
      type: type.value,
      body: body.value,
      genre: selectedGenre,
      imgUrl: this.state.imgUrl
    })
      .then(newText => {
        this.setState({
          showForm: false
        })
        this.props.getText()
      })
  }

  handleFileUpload = e => {
    console.log('The file to be uploaded is: ', e.target.files[0]);
 
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('imgUrl', e.target.files[0]);
 
    service
      .handleUpload(uploadData)
      .then(response => {
        console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imgUrl: response.secure_url });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };


  form = () => {
    const genreOptions = [{ value: 'drama', label: 'drama' }, { value: 'fiction', label: 'fiction' },
    { value: 'mystery', label: 'mystery' }, { value: 'horror', label: 'horror' }, { value: 'thriller', label: 'thriller' },
    { value: 'historical', label: 'historical' }, { value: 'romance', label: 'romance' }, { value: 'action', label: 'action' },
    { value: 'non-fiction', label: 'non-fiction' }, { value: 'sci-fi', label: 'sci-fi' }, { value: 'educational', label: 'educational' },
    { value: 'biographical', label: 'biographical' }, { value: 'erotic', label: 'erotic' }, { value: 'crime', label: 'crime' },
    { value: 'childrens', label: 'childrens' }, { value: 'comedy', label: 'comedy' }]

    const typeOptions = [{ value: 'book', label: 'Book' }, { value: 'poem', label: 'Poem' }, { value: 'article', label: 'Article' }]

    return (
      <div className="flex justify-center overflow-y-scroll items-center fixed h-screen top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-60">
        <form
          onSubmit={ e => this.handleSubmit(e) }
          enctype="multipart/form-data"
          className="flex flex-col w-96 py-10 px-10 text-left relative rounded-md bg-white">

          <div className="flex flex-col mb-5">
            <legend className="text-center text-2xl font-semibold">Add a new text</legend>
            <button onClick={ this.closeForm } className="absolute top-5 text-xl right-5 w-10 h-10 rounded-full">✖</button>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title"><strong>Title:</strong> </label>
            <input className="border-b" required type="text" name="title" />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="author"><strong>Author:</strong></label>
            <input className="border-b" required type="author" name="author" />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="releaseDate"><strong>Release Date: </strong> </label>
            <input type="date" name="releaseDate" />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="releaseDate"><strong>Cover: </strong> </label>
            <input type="file" name="imgUrl" onChange={e => this.handleFileUpload(e)} />
          </div>
          <label htmlFor="type"><strong>Type:</strong></label>
          <div className="flex flex-col mb-5">
            <Select
              name="type"
              options={ typeOptions }
              className="basic-single"
              classNamePrefix="select"
              id="type">
            </Select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="genre"><strong>Genre:</strong></label>
            <Select
              isMulti
              name="genre"
              options={ genreOptions }
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="body"><strong>Body:</strong> </label>
            <textarea className="border h-48 pt-3 px-4" id="body" name="body"></textarea>
          </div>
          <button className="py-2 px-4 bg-gray-900 text-white font-bold"> + add</button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="flex justify-end">
      <div>
        <button className="bg-gray-100 hover:bg-blue-900 hover:text-white duration-500 text-black py-2 px-8 shadow-md rounded-md mr-36" onClick={ e => this.setState({ showForm: !this.state.showForm }) }>Add Text</button>
        </div>
        {this.state.showForm && this.form() }
      </div>
    )
  }
}

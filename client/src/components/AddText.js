import axios from 'axios'
import React, { Component } from 'react';
import Select from 'react-select';

export default class AddText extends Component {
  state = {
    showForm: false,
    genre: []
  }

  closeForm = () => {
    this.setState({
      showForm: false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, releaseDate, type, genre, body } = e.target;

    let selectedGenre = [];
    if (genre.length > 1) {
      genre.forEach(genre => {
        selectedGenre.push(genre.value)
      })
    } else { selectedGenre = genre.value }


    axios.post('http://localhost:5005/api/textList/addText', {
      title: title.value,
      author: author.value,
      releaseDate: new Date(releaseDate.value),
      type: type.value,
      body: body.value,
      genre: selectedGenre
    })
      .then(newText => {
        this.setState({
          showForm: false
        })
        this.props.getText()
      })
  }

  form = () => {
    const genreOptions = [{ value: 'drama', label: 'drama' }, { value: 'fiction', label: 'fiction' },
    { value: 'mystery', label: 'mystery' }, { value: 'horror', label: 'horror' }, { value: 'thriller', label: 'thriller' },
    { value: 'historical', label: 'historical' }, { value: 'romance', label: 'romance' }, { value: 'action', label: 'action' },
    { value: 'non-fiction', label: 'non-fiction' }, { value: 'sci-fi', label: 'sci-fi' }, { value: 'educational', label: 'educational' },
    { value: 'biographical', label: 'biographical' }, { value: 'erotic', label: 'erotic' }, { value: 'crime', label: 'crime' },
    { value: 'childrens', label: 'childrens' }, { value: 'comedy', label: 'comedy' }]

    return (
      <div className="flex justify-center items-center fixed h-screen top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-60">
        <form onSubmit={ e => this.handleSubmit(e) } className="flex flex-col py-10 px-10 bg-white text-left relative w-1/3 rounded-md">
          <div className="flex flex-col mb-5">
            <legend className="text-center">Add a new text</legend>
            <button onClick={ this.closeForm } className="absolute top-1 right-1">✖</button>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title">Title: </label>
            <input className="border-b" required type="text" name="title" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="author">Author: </label>
            <input className="border-b" required type="author" name="author" />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="releaseDate">Release Date: </label>
            <input type="date" name="releaseDate" />
          </div>
          <label htmlFor="type">Type: </label>
          <div className="flex flex-col mb-5">
            <select name="type" onChange={ e => this.setState({ genre: [this.state.genre, e.target.value] }) } id="type">
              <option value="book">Book</option>
              <option value="poem">Poem</option>
              <option value="article">Article</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="genre">Genre: </label>
            <Select
              isMulti
              name="genre"
              options={ genreOptions }
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="body">Body: </label>
            <textarea className="border" id="body" name="body"></textarea>
          </div>
          <button> + add</button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div>
        <button className="bg-gray-900 text-white font-bold py-4 px-8 shadow-md rounded-md" onClick={ e => this.setState({ showForm: !this.state.showForm }) }>Add Text</button>
        {this.state.showForm && this.form() }
      </div>
    )
  }
}

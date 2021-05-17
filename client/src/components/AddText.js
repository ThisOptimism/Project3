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

    const typeOptions = [{value: 'book', label: 'Book'}, {value: 'poem', label: 'Poem'}, {value: 'article', label: 'Article'}]

    return (
      <div className="flex justify-center overflow-y-scroll items-center fixed h-screen top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-60">
        <form onSubmit={ e => this.handleSubmit(e) } className="flex flex-col py-10 px-10 bg-white text-left relative w-1/3 rounded-md">
          <div className="flex flex-col mb-5">
            <legend className="text-center text-2xl font-semibold">Add a new text</legend>
            <button onClick={ this.closeForm } className="absolute top-1 right-1">✖</button>
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
          <label htmlFor="type"><strong>Type:</strong></label>
          <div className="flex flex-col mb-5">
            <Select 
            name="type" 
            options={typeOptions}
            className="basic-single" 
            classNamePrefix="select" 
            onChange={ e => this.setState({ genre: [this.state.genre, e.target.value] }) } 
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
      <div>
        <button className="bg-gray-900 text-white font-bold py-4 px-8 shadow-md rounded-md" onClick={ e => this.setState({ showForm: !this.state.showForm }) }>Add Text</button>
        {this.state.showForm && this.form() }
      </div>
    )
  }
}

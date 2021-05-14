import axios from 'axios'
import React, { Component } from 'react';
import Select from 'react-select';

export default class AddText extends Component {
  state = {
    showForm: false,
    genre: []
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

    // const options = genreOptions.map(option => {
    //   return <option key={ option } value={ option }>{ option }</option>
    // })

    return (
      <form onSubmit={ e => this.handleSubmit(e) }>
        <label htmlFor="title">Title: </label>
        <input required type="text" name="title" />

        <label htmlFor="author">Author: </label>
        <input required type="author" name="author" />

        <label htmlFor="releaseDate">Release Date: </label>
        <input type="date" name="releaseDate" />

        <label htmlFor="type">Type: </label>
        <select name="type" onChange={ e => this.setState({ genre: [this.state.genre, e.target.value] }) } id="type">
          <option value="book">Book</option>
          <option value="poem">Poem</option>
          <option value="article">Article</option>
        </select>

        <label htmlFor="genre">Genre: </label>
        <Select
          isMulti
          name="genre"
          options={ genreOptions }
          className="basic-multi-select"
          classNamePrefix="select"
        />
        {/* <select multiple={ true } name="genre" id="genre">
          { options }
        </select> */}

        <label htmlFor="body">Body: </label>
        <textarea id="body" name="body"></textarea>
        <button> + add</button>
      </form>
    )
  }
  render() {
    return (
      <div>
        <button onClick={ e => this.setState({ showForm: !this.state.showForm }) }>Add Text</button>
        {this.state.showForm && this.form() }
      </div>
    )
  }
}

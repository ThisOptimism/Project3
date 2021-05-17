import axios from 'axios';
import React, { Component } from 'react';
// import sampleText from '../sampleText';
import TextDiv from './TextDiv';
import AddText from './AddText';
import Select from 'react-select'

export default class LibraryPage extends Component {

  state = {
    texts: [],
    name: '',
    author: '',
    targetLang: '',//set the state manually
    type: ''
  }

  componentDidMount = () => {
    this.getAllTexts();
  }

  getAllTexts = () => {
    axios.get('/api/textList/allText')
      .then(
        response => {
          console.log(response.data)
          this.setState({
            texts: response.data
            // map(text => <TextDiv key={text._id} text={text}/>)
            //It it difficult to filter over an array with a TextDiv component
            //The original array is composed of object - the key are more easily accessible

          })
        }
      )
  }

  handleQueryChange = e => {
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }

  updateTargetLang = e => {
    console.log(e)
    this.setState({
      targetLang : e.value
    })
  }

  updateTargettype = e => {
    this.setState({
      type : e.value
    })
  }

  render() {
    
    let filterredTexts = this.state.texts.filter(element => {
      return (`${element.title.toLowerCase()} ${element.author.toLowerCase()}`.includes(this.state.name.toLowerCase()))
      && (element.sourceLang === this.state.targetLang || !this.state.targetLang)
      && (element.type === this.state.type || !this.state.type)

     
    })
    console.log(filterredTexts.length)
    let mappedTexts = filterredTexts.map(text => <TextDiv key={ text._id } text={ text } />)

    const langOptions = [
      {value: '', label : 'All languages'},
      {value : 'FR', label : 'French'},
      {value : 'GER', label : 'German'},
      {value : 'EN', label : 'English'},
      {value : 'ES', label : 'Spanish'}
    ]

    const typeOptions = [
      {value: '', label : 'All type'},
      {value: 'book', label : 'Book'},
      {value: 'poem', label : 'Poem'},
      {value: 'article', label : 'Article'}
    ]

    return (
      <main className="mx-auto p-10 text-center">
        <h1 className="text-3xl py-7">Library Page</h1>
        <div>
        <form>
          <label>
            Title / Author:
          </label>
          <input type="text"
            value={ this.state.name }
            onChange={ this.handleQueryChange } /><br />
            <label htmlFor="targetLangSelect">Choose a language</label>
            <Select id='targetLangSelect' options={langOptions} onChange={this.updateTargetLang}/><br />
            <label htmlFor="typeSelect">Choose a type</label>
            <Select id='typeSelect' options={typeOptions} onChange={this.updateTargettype}/>
        </form>
        </div>
        {this.props.user && <AddText getText={ this.getAllTexts } /> }
        <div className="flex flex-wrap justify-around">
          { mappedTexts }
        </div>
      </main>
    )
  }
}

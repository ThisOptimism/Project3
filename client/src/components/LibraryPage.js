import axios from 'axios';
import React, { Component } from 'react';
import TextDiv from './TextDiv';
import AddText from './AddText';
import Select from 'react-select'
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';


export default class LibraryPage extends Component {

  state = {
    texts: [],
    name: '',
    author: '',
    targetLang: '',
    type: '',
    loading: true
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
            texts: response.data,
            loading: false
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

    if(this.state.loading){
      return (<div></div>)
    } else {

    return (
      <>
      <div className="min-h-full bg-white">
        <div className="w-3/12 mx-40">
        <form>
        <div className="pt-6 flex justify-between">
        <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
        <Input
          className='w-96 h-9 text-3xl'
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Type in for title / author"
          value={ this.state.name }
          onChange={ this.handleQueryChange }
        />
        </div>
            <div className="h-6 flex justify-between pt-8" >
            <div>
            <label htmlFor="targetLangSelect">Choose a language</label>
            <Select className="w-52" id='targetLangSelect' options={langOptions} onChange={this.updateTargetLang}/>
            </div>
            <div>
            <label className="ml-8" htmlFor="typeSelect">Choose a type</label>
            <Select className="w-52 ml-8" id='typeSelect' options={typeOptions} onChange={this.updateTargettype}/>
            </div>
            </div>
        </form><br />
        </div>
        {this.props.user && <AddText getText={ this.getAllTexts } /> }
        <div className="flex flex-col justify-around w-2/3 m-auto pt-10 ">
          { mappedTexts }
          <div className="mt-16 text-3xl">
          { filterredTexts.length === 0 && <p>There is no result matching your request. Please enter a new title / author</p> }
          </div>
        </div>
        </div>
      </>
    )}
  }
}

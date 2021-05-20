import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';


export default class VocabLists extends Component {
  state = {
    vocabLists: [],
    name: '',
    loading: true
  }
  componentDidMount = () => {
    this.getVocablists()
  }
  getVocablists = () => {
    axios.get('/api/vocablist/allVocabList')
      .then(vocablistsFromDb => {
        console.log(vocablistsFromDb)
        this.setState({
          vocabLists: vocablistsFromDb.data,
          loading: false
        })
        
        console.log(this.state.vocabLists)
      })
      .catch(err => console.log(err));
  }

  handleQueryChange = e => {
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }



  render() {
   
    const filterredText = this.state.vocabLists.filter(element => {
      return (`${element.createdBy.username.toLowerCase()} ${element.name.toLowerCase()}`.includes(this.state.name.toLowerCase()))
    })


    const mappedList = filterredText.map((vocablist, index) => {
      return (
        <Link to={ `/vocablist/${vocablist._id}` }>
          <div className="w-90 mb-10 bg-gray-200 bg-opacity-20 rounded-lg p-5">
            <h3 className="text-lg font-bold">{ vocablist.name }</h3>
            <span>{ vocablist.nativeLang }</span> – <span>{ vocablist.targetLang }</span>
            <h6><strong>created by: {vocablist.createdBy.username}</strong></h6>
          </div>
        </Link>
      )
    })

     if(this.state.loading){
      return (<div></div>)
    } else {
    return (
      <>
      <div className="min-h-full bg-white px-10">
      <h1 className="text-center text-white text-3xl mb-5">All Vocab Lists</h1>
      <div className="mb-5 ml-14">
        <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
        <Input
          className='w-96 h-9 text-3xl'
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Search for title / username"
          value={ this.state.name }
          onChange={ this.handleQueryChange }
        />
        </div>
        <div className="grid grid-cols-3 gap-x-10">
          { mappedList }
        </div>
        <div className="mt-16 flex justify-center text-3xl">
          { filterredText.length === 0 && <p>There is no result matching your request. Please enter a new title / username</p> }
          </div>
          </div>
      </>
    )}
  }
}

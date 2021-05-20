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
          <div className=" bg-gray-50 min-w-min border-2 rounded-lg p-5 pb-10 relative hover:bg-blue-100 transition-colors">
            <h3 className="inline-block text-lg font-bold">{ vocablist.name }</h3><br />
            <span className="italic" > {
              vocablist.nativeLang
            } </span> – <span className="italic">{ vocablist.targetLang }</span><br />
            <h6 className="inline-block"><strong>created by: </strong>{ vocablist.createdBy.username }</h6>
          </div>
        </Link>
      )
    })

    if (this.state.loading) {
      return (<div></div>)
    } else {
      return (
        <>
          <div className="min-h-full bg-white p-10">
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
            <div className="grid grid-cols-4 gap-10">
              { mappedList }
            </div>
            <div className="mt-16 flex justify-center text-3xl">
              { filterredText.length === 0 && <p>There is no result matching your request. Please enter a new title / username</p> }
            </div>
          </div>
        </>
      )
    }
  }
}

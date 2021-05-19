import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';




export default class VocabLists extends Component {
  state = {
    vocabLists: []
  }
  componentDidMount = () => {
    this.getVocablists()
  }
  getVocablists = () => {
    axios.get('http://localhost:5005/api/vocablist/allVocabList')
      .then(vocablistsFromDb => {
        this.setState({
          vocabLists: vocablistsFromDb.data
        })
        console.log(this.state.vocabLists)
      })
      .catch(err => console.log(err));
  }
  render() {
    const VocabList = this.state.vocabLists.map((vocablist, index) => {
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

    return (
      <>
      <h1 className="text-center text-white text-3xl mb-5">All Vocab Lists</h1>
        <div className="grid grid-cols-3 gap-x-10">
          { VocabList }
        </div>

      </>
    )
  }
}

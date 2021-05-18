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
          <div className="w-90 mb-10 bg-gray-100 rounded-lg p-5">
            <h3 className="text-lg font-bold">{ vocablist.name }</h3>
            <span>{ vocablist.nativeLang }</span><span>{ vocablist.targetLang }</span>
            <h6><strong>created by: </strong></h6>
          </div>
        </Link>
      )
    })

    return (
      <>
        {VocabList }
      </>
    )
  }
}

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class VocabListDetail extends Component {
  state = {
    vocabListWords: [],
    vocabListName: ''
  }

  getVocabListDetail = () => {
    axios.get(`/api/vocablist/findVocabList/${this.props.match.params.id}`)
      .then(vocablist => {
        this.setState({
          vocabListWords: vocablist.data.words,
          vocabListName: vocablist.data.name
        })
      })
      .catch(err => console.log(err))
  }
  componentDidMount = () => {
    this.getVocabListDetail()
  }


  render() {
    return (
      <div className="min-h-full bg-white">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-center mb-5 pt-10 text-yellow-500">{this.state.vocabListName}</h1>
        {this.state.vocabListWords.map((wordpairs, index) => {
          return (
            <div key={index} className="py-3 mx-auto w-1/3 rounded-md border-2 mb-3 text-3xl">
            <span className="text-blue-400">{wordpairs[0]} – </span><span className="text-green-600">{wordpairs[1]}</span>
            </div>
          )
        })}
       <Link to={`/vocablist/${this.props.match.params.id}/flashcards`} > <button className="bg-green-600 hover:bg-yellow-500 duration-150 text-white px-3 py-2 rounded-lg mt-5 text-2xl">Learn this set!</button></Link>
      </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import axios from 'axios';

export default class VocabListDetail extends Component {
  state = {
    vocabListWords: [],
    vocabListName: ''
  }

  getVocabListDetail = () => {
    axios.get(`http://localhost:5005/api/vocablist/findVocabList/${this.props.match.params.id}`)
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
      <div className="text-center">
        <h1 className="font-bold text-2xl text-center mb-5">{this.state.vocabListName}</h1>
        {this.state.vocabListWords.map((wordpairs, index) => {
          return (
            <div key={index} className="text-lg leading-releaxed">
            <span>{wordpairs[0]} – </span><span>{wordpairs[1]}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

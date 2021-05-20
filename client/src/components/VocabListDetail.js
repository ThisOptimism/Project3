import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FlashCardGame from './FlashCardGame';
import FlashCard from './FlashCard';

export default class VocabListDetail extends Component {
  state = {
    vocabListWords: [],
    vocabListName: '',
    LearnModeActive: false
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
      <div className="text-center bg-white min-h-full">
        <h1 className="font-bold text-2xl text-center">{ this.state.vocabListName }</h1>
        {this.state.vocabListWords.map((wordpairs, index) => {
          return (
            <div key={ index } className="text-lg leading-releaxed">
              <span>{ wordpairs[0] }</span> – <span>{ wordpairs[1] }</span>
            </div>
          )
        }) }
        <button onClick={ e => this.setState({ LearnModeActive: true }) }
          className="bg-green-800 font-bold text-white px-4 py-2 rounded-lg">Learn this set!
        </button>
        {this.state.LearnModeActive && <FlashCardGame user={ this.props.user } vocabListId={this.props.match.params.id}/>}
      </div>
    )
  }
}

import React, { Component } from 'react';
import axios from 'axios';
import VocabListDiv from './VocabListDiv'




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
    

    return (
      <>
      
      </>
    )
  }
}

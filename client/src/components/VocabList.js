import React, { Component } from 'react';
import axios from 'axios';
import VocabListDiv from './VocabListDiv'

export default class VocabList extends Component {
  state = {
    vocabLists: []
  }
  componentDidMount = () => {
    this.getVocabListFromUser();
  }
  getVocabListFromUser = () => {
    axios.get(`http://localhost:5005/api/vocabList/myVocabLists/${this.props.user._id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          vocabLists: res.data
        })
      })
  }

  vocabLists = () => {
    return this.state.vocabLists.map(list => <VocabListDiv key={list._id} vocablist={ list } user={this.props.user}/>)
  }

  render() {

    return (
      <div>
        <h3 className="text-3xl text-center mb-5 font-bold tracking-wide border-b pb-1">MY VOCABLISTS 📚</h3>
        {this.vocabLists() }
      </div>
    )
  }
}

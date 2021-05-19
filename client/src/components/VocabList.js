import React, { Component } from 'react';
import axios from 'axios';
import VocabListDiv from './VocabListDiv'
import { set } from 'mongoose';

export default class VocabList extends Component {
  state = {
    vocabLists: [],
    message: '',
  }
  componentDidMount = () => {
    this.getVocabListFromUser();
  }
  getVocabListFromUser = () => {
    axios.get(`/api/vocabList/myVocabLists/${this.props.user._id}`)
      .then(res => {
        this.setState({
          vocabLists: res.data
        })
      })
  }
  setMessage = (deleteMessage) => {
    this.setState({
      message: deleteMessage
    })
  }



  vocabLists = () => {
    return this.state.vocabLists.map(list => <VocabListDiv key={ list._id } setMessage={ this.setMessage } getVocabList={ this.getVocabListFromUser } vocablist={ list } user={ this.props.user } />)
  }
  render() {
    return (
      <div className="relative">
        <h3 className="text-3xl text-center mb-5 font-bold tracking-wide pb-1">MY VOCABLISTS 📚</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 ">
          { this.vocabLists() }
        </div>
        { this.state.message &&
          <div className="fixed flex justify-center items-center h-screen top-0 right-0 z-10 left-0 bottom-0 bg-black bg-opacity-60 transition-opacity">
            <h1 className="text-center text-6xl p-10 bg-gray-50 bg-opacity-20 rounded-lg text-green-500 font-bold">{ this.state.message } ✅</h1>
          </div> }
      </div>
    )
  }
}

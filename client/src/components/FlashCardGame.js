import axios from 'axios'
import React, { Component } from 'react';
import FlashCard from './FlashCard';

export default class FlashCardGame extends Component {

  state={
    vocabListObject: '',
    vocabListWords: [],
    vocabIndex: -1,
    randomOrder: false,
    currentWord: ['Use  arrows or the buttons to start','Use your arrows or the buttons to start']
  }

  componentDidMount = () =>{
    axios.get(`/api/vocabList/findVocabList/${this.props.vocabListId}`)
    .then(response => {
      this.setState({
        vocabListObject: response.data,
        vocabListWords: response.data.words
      })
    })
  }

  showNewWord = (direction) => {
    const card = document.querySelector('.flashcard')
    card.classList.remove('flashcard-turned')
    setTimeout(
      () => {
        if(this.state.randomOrder) {
          const randomIndex = Math.floor(Math.random() * this.state.vocabListWords.length)
          this.setState({
            vocabIndex: randomIndex,
            currentWord: this.state.vocabListWords[randomIndex]
          })
        } else {

          this.setState(prevState => {
            if(prevState.vocabIndex === 0) return ({
              vocabIndex: this.state.vocabListWords.length - 1,
              currentWord: this.state.vocabListWords[this.state.vocabListWords.length - 1]
            }) 
              return ({
            vocabIndex: (prevState.vocabIndex + direction) % (this.state.vocabListWords.length),
            currentWord: this.state.vocabListWords[((prevState.vocabIndex + direction) % (this.state.vocabListWords.length))]
            })
          }
          )      
        }

      }, 200
    )

  }

  toggleRandom = () => {
    
    this.setState({
      randomOrder: !this.state.randomOrder,
    })
  }

  handle = () => {
    console.log('key pressed');
    
  }

  render() {
    

    return (
      <div className="fixed h-screen bg-black top-0 left-0 w-full bg-opacity-60 flex items-center justify-center">
        <div className="w-auto bg-white bg-opacity-80 p-3 text-center border relative" >
         <button onClick={e => this.props.closeWin(e)} className="absolute top-1 text-black right-1 text-3xl">✖</button>
          <label htmlFor="randomOrder" className="font-bold text-lg mr-1">Random order: </label>
          <input type="checkbox" name="randomOrder" checked={this.state.randomOrder} onClick={this.toggleRandom}/>
          <FlashCard showNewWord={this.showNewWord} vocabListObject={this.state.vocabListObject} word={this.state.currentWord} />
        </div>
      </div>
    )
  }
}

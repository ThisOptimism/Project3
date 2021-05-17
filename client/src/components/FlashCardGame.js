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
    axios.get(`http://localhost:5005/api/vocabList/findVocabList/${this.props.match.params.id}`)
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
      <div className="w-auto bg-white bg-opacity-80 p-3 text-center" >
        <h1>FlashCards from <em>{this.state.vocabListObject.name}</em></h1> 
        <label htmlFor="randomOrder">Random order:</label>
        <input type="checkbox" name="randomOrder" checked={this.state.randomOrder} onClick={this.toggleRandom}/>
        <FlashCard showNewWord={this.showNewWord} vocabListObject={this.state.vocabListObject} word={this.state.currentWord} />
      </div>
    )
  }
}

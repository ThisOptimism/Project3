import React, { Component } from 'react'

export default class FlashCard extends Component {


  flipCard = () => {
    console.log('flipping');
    const card = document.querySelector('.flashcard')
    card.classList.contains('flashcard-turned') ? card.classList.remove('flashcard-turned') : card.classList.add('flashcard-turned')
  }


  handleKeyUp = event => {
    if(event.keyCode === 38 || event.keyCode === 40) {
      console.log('up key');
      console.log(event.keyCode);
      this.flipCard()
    }
    if (event.keyCode === 39) {
      this.props.showNewWord(1)
    }
    if (event.keyCode === 37) {
      this.props.showNewWord(-1)
    }
    
    
  }

  render() {

    document.addEventListener('keydown', this.handleKeyUp)


    return (
      <>
      <div className="flashcard mx-auto min-w-1/2 md:w-500px h-72 bg-white rounded-md bg-opacity-100  "
        >
          <div className="flashcard-inner h-72 min-w-1/2 md:w-500px" >
            <div className="flashcard-front bg-white  h-72 min-w-1/2 md:w-500px flex items-center justify-center rounded-lg">
              <h1 className="text-6xl">{this.props.word[0]}</h1>
            </div>
            <div className="flaschard-back back-card-text bg-white h-72 min-w-1/2 md:w-500px flex items-center justify-center rounded-lg">
            <h1 className="text-6xl ">{this.props.word[1]}</h1>
            </div>
          </div>
      </div>
      <button className="bg-blue-500 m-4 py-2 rounded-3xl px-4 text-white hover:bg-blue-800" onClick={() => {this.props.showNewWord(-1)}}>Last Card</button>
      <button className="bg-blue-500 m-4 py-2 rounded-3xl px-4 text-white hover:bg-blue-800" onClick={() => {this.props.showNewWord(1)}}>Next Card</button>
      </>
    )
  }
}

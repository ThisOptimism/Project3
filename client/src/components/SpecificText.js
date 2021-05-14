import axios from 'axios';
import React, { Component } from 'react';
import SideBar from './SideBar';
import translateWords from '../services/translate';


export default class SpecificText extends Component {

  state = {
    textTitle: '',
    textBody: '',
    sideBar: false, 
    wordToBeTranslated: '',
    wordTranslated: '',
    targetLang: 'FR',
    sourceLang: ''

  }

  componentDidMount = () => {

    axios.get(`http://localhost:5005/api/textList/findText/${this.props.match.params.id}`)
      .then(text => {
        // console.log(text.data);

        const clickableText = this.makeTextClickable(text.data.body)
        this.setState({
          textTitle: text.data.title,
          textBody: clickableText,
        })
      })
      .catch(err => console.log(err)
      )
  }

  makeTextClickable = (text) => {
    // const splitText = this.splitText(text);

    const clickableText =
      text.split(/\s+/)
        .map(word =>
          <span onClick={ e => this.handleTranslation(e.target.innerText) }>{ word + ' ' }</span>
        );

    return clickableText;
  }

  showSideBar = (e) => {
    if (e === this.state.wordToBeTranslated) {
      this.setState({
        sideBar: false,
      })
    } else {
      this.setState({
        wordToBeTranslated: e,
        sideBar: true
      })
    }
  }

  handleTranslation = async (word) => {
    
    console.log(word);

    const newWord = this.prepWordForApi(word);
    console.log(newWord);

    //console.log(translateWords(newWord, 'FR'));
    const translatedWord = await translateWords(newWord, this.state.targetLang)
    //console.log(translatedWords);
    this.setState({
      wordToBeTranslated: newWord,
      wordTranslated: translatedWord,
    })
    this.showSideBar(translatedWord)
  }

  prepWordForApi(word) {
    // console.log('word: ', word);
    // console.log(word[word.length-3]);

    // console.log(word.replace(/'/g,''));


    // if (word.indexOf('n') >= 0) {
    //   console.log('removing apostrophe');

    //   word.slice(word.indexOf("'"))
    // }

    // console.log(word.split())
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  }

  render() {
    return (
      <main>
        <h1>{ this.state.textTitle }</h1>
        <p>{ this.state.textBody }</p>
        {this.state.sideBar && <SideBar word={ this.state.wordToBeTranslated } /> }
      </main>
    )
  }
}

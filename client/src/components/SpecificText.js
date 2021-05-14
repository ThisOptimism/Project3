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
          sourceLang: text.data.sourceLang,
          textBody: clickableText,
        })
      })
      .catch(err => console.log(err)
      )
  }
  makeTextClickable = (text) => {
    return text.split(' ')
      .map(word => {
        if (word.includes('\n')) {

          const overlineWords = word.split('\n')
          
          return <>
            <span onClick={ e => this.handleTranslation(e.target.innerText) }>{ overlineWords[0] }</span><br />
            <span onClick={ e => this.handleTranslation(e.target.innerText) }>{ overlineWords[1] + ' ' }</span>
          </>
        } else return <span onClick={ e => this.handleTranslation(e.target.innerText) }>{ word + ' ' }</span>
      }
      );
  }
  showSideBar = (e) => {

    this.setState({
      sideBar: !this.state.sideBar,
      // wordToBeTranslated: e
    })
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
    return word.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "").toLowerCase()
  }
  render() {
    // console.log(this.props.match.params.id)
    return (
      <main>
        <h1>{ this.state.textTitle }</h1>
        <p>{ this.state.textBody }</p>
        {this.state.sideBar && <SideBar sourceLangWord={ this.state.wordToBeTranslated } targetLangWord={ this.state.wordTranslated } textTitle={ this.state.textTitle } sourceLang={ this.state.sourceLang } targetLang={ this.state.targetLang } user={ this.props.user } /> }
      </main>
    )
  }
}
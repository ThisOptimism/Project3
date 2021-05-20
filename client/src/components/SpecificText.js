import axios from 'axios';
import React, { Component } from 'react';
import SideBar from './SideBar';
import translateWords from '../services/translate';
import Select from 'react-select';


export default class SpecificText extends Component {
  state = {
    textTitle: '',
    clickableTitle: '',
    textBody: '',
    sideBar: false,
    wordToBeTranslated: '',
    wordTranslated: '',
    targetLang: 'EN',
    sourceLang: '',
    text: '',
  }
  componentDidMount = () => {

    axios.get(`/api/textList/findText/${this.props.match.params.id}`)
      .then(text => {
        // console.log(text.data);
        const clickableText = this.makeTextClickable(text.data.body)
        this.setState({
          text: text.data,
          textTitle: text.data.title,
          clickableTitle: this.makeTextClickable(text.data.title),
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
            <span class="hover:text-blue-600" onClick={ e => this.handleTranslation(e.target.innerText) }>{ overlineWords[0] }</span><br />
            <span class="hover:text-blue-600" onClick={ e => this.handleTranslation(e.target.innerText) }>{ overlineWords[1] + ' ' }</span>
          </>
        } else return <span class="hover:text-blue-600"  onClick={ e => this.handleTranslation(e.target.innerText) }>{ word + ' ' }</span>
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
    // this.showSideBar();

    const newWord = this.prepWordForApi(word);
    console.log(newWord);

    //console.log(translateWords(newWord, 'FR'));
    const translatedWord = await translateWords(newWord, this.state.targetLang)
    //console.log(translatedWords);
    this.setState({
      wordToBeTranslated: newWord,
      wordTranslated: translatedWord,
    })
    if(!this.state.sideBar) this.showSideBar(translatedWord)
  }

  updateTargetLang = (e) => {
    
    this.setState({
      targetLang: e.value
    })
  }

  prepWordForApi(word) {
    console.log('word: ', word);
    // console.log(word[word.length-3]);

    // console.log(word.replace(/'/g,''));


    // if (word.indexOf('n') >= 0) {
    //   console.log('removing apostrophe');

    //   word.slice(word.indexOf("'"))
    // }
    // console.log(word.split())
    return word.toLowerCase().replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "")
  }
  render() {

    const text = this.state.text

    // console.log(this.props.match.params.id)
    const langOptions = [
      { value:'EN', label: 'English'},
      { value:'DE', label: 'German'},
      { value:'FR', label: 'French'},
      { value:'ES', label: 'Spanish'},
      { value:'IT', label: 'Italian'},
      { value:'NL', label: 'Dutch'},
      { value:'PL', label: 'Polish'}
    ]

    return (

      <div class="mx-auto lg:ml-52 p-10 text-center mt-16 pb-20 max-w-screen-md bg-white bg-opacity-75 rounded-md">
        <div>
          <img src={text.img} alt={text.title}/>
          <h1 class="text-3xl py-7">{ this.state.clickableTitle }</h1>
          <p>{text.author}</p>
          <p>Reading time: Approx. {text.readingTime} mins</p>
          <p>Reading difficulty: {text.difficulty}</p>
        </div>        <div className="flex-col flex items-center">
          <label htmlFor="targetLangSelect">Translate to</label>
          <Select id="targetLangSelect" onChange={this.updateTargetLang} options={langOptions} defaultValue={langOptions[0]} className="w-28" default="FR"/>
        </div>

        <p class="text-lg"> { this.state.textBody } </p>
        {this.state.sideBar && <SideBar sourceLangWord={ this.state.wordToBeTranslated } targetLangWord={ this.state.wordTranslated } textTitle={ this.state.textTitle } sourceLang={ this.state.sourceLang } targetLang={ this.state.targetLang } user={ this.props.user } showSideBar={this.showSideBar} /> }
      </div>
    )
  }
}
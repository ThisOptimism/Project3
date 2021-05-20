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
    inFavorites: '',
  }
  componentDidMount = () => {
    this.getUser()
    .then(user => {
      if(user.data.favoriteText.includes(this.props.match.params.id)) {
        this.setState({
          inFavorites: true,
        })      
      } else {
        this.setState({
          inFavorites: false
        })       
      }
    })


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
  

  getUser = () => {
    return axios.get(`/api/auth/getuser/${this.props.user._id}`)
      .then(user => {    
        this.setState({
          user: user.data
        })
        return user;
      })
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

  toggleFavorite= () => {

    let addOrRemove = this.state.inFavorites ? 'remove' : 'add';

    axios.post(`/api/textList/toggleFavorite/${this.state.text._id}`, {addOrRemove})
    .then(response => console.log(response))

    this.setState({
      inFavorites: !this.state.inFavorites
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

      <div className="mx-auto lg:ml-52  text-center mt-16 pb-20 max-w-screen-md bg-white bg-opacity-75 rounded-md mb-6">
        <div className="bg-opacity-100 bg-gray-200 rounded-t-md	bg-white p-10 flex flex-col w-full">
         <h1 className="text-3xl pt-7">{ this.state.clickableTitle }</h1>
          <p className="text-xl">{text.author}</p>
         <div className="flex w-full pt-3">
            <div className="w-1/2 flex flex-col justify-around">
              {/* <img src={text.img} alt={text.title}/> */}
              <p className="p-2">Reading time: Approx. {text.readingTime} mins</p>
              <p className="p-2">Reading difficulty: {text.difficulty}</p>
              <button className="p-2" onClick={this.toggleFavorite} className={this.state.inFavorites ? 'border-blue-800 border-2 w-min px-4 m-auto rounded-full bg-blue-500 text-white mt-4' : 'border-blue-800 border-2 w-min px-4 m-auto rounded-full bg-gray-200 mt-4'}>{this.state.inFavorites ? 'Added to Favourites' : 'Add to Favourites'}</button>

            </div>
            <div className="flex-col flex  justify-center items-center w-1/2">
              <label htmlFor="targetLangSelect">Translate to</label>
              <Select id="targetLangSelect" onChange={this.updateTargetLang} options={langOptions} defaultValue={langOptions[0]} className="w-28" default="FR"/>
            </div>

         </div>
        </div>
        <div className="p-10">
          <p class="text-xl"> { this.state.textBody } </p>
          {this.state.sideBar && <SideBar sourceLangWord={ this.state.wordToBeTranslated } targetLangWord={ this.state.wordTranslated } textTitle={ this.state.textTitle } sourceLang={ this.state.sourceLang } targetLang={ this.state.targetLang } user={ this.props.user } showSideBar={this.showSideBar} /> }
        </div>
      </div>
    )
  }
}
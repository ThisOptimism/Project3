import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import UpdateWords from './UpdateWords'

export default class UpdateVocabList extends Component {
  state = {
    name: this.props.vocablist.name,
    nativeLang: this.props.vocablist.nativeLang,
    targetLang: this.props.vocablist.targetLang,
    words: this.props.vocablist.words,
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleChangeNativeLang = e => {
    console.log(e.value);
    this.setState({
      nativeLang: e.value
    })
  }

  handleChangeTargetLang = e => {
    this.setState({
      targetLang: e.value
    })
  }
  updateList = e => {
    e.preventDefault()
    const { name, nativeLang, targetLang, tarWords, natWords } = e.target

    let words = [];
    for (let i = 0; i < tarWords.length; i++) {
      words.push([natWords[i].value, tarWords[i].value])
    }

    axios.put(`/api/vocabList/updateVocabList/${this.props.vocablist._id}`, {
      name: name.value,
      nativeLang: nativeLang.value || this.state.nativeLang,
      targetLang: targetLang.value || this.state.targetLang,
      words: words,
    })
      .then(newList => {
        console.log(newList.data)
        this.props.getVocabList();
        this.props.setUpdateForm();
      })
      .catch(err => console.log(err))


  }
  render() {

    const Words = this.state.words.map((word, index) => {
      return (
        <UpdateWords key={index} word={ word } />
      )
    })

    const langOptions = [
      { value: 'FR', label: 'French' },
      { value: 'DE', label: 'German' },
      { value: 'EN', label: 'English' },
      { value: 'ES', label: 'Spanish' }
    ]

    return (
      <div className="fixed flex justify-center items-center h-screen top-0 right-0 z-10 left-0 bottom-0 bg-black bg-opacity-60 transition-opacity">
        <form onSubmit={ e => this.updateList(e) } className="p-10 bg-white rounded-lg relative">
          <div>
            <button onClick={ this.props.setUpdateForm } className="absolute top-5 text-xl right-5 w-10 h-10 rounded-full">✖</button>
            <legend className="mb-5 text-lg font-bold text-center">Edit Vocab list</legend>
          </div>
          <div className="mb-4 flex flex-col">
            <label className="font-bold" htmlFor="name">Name: </label>
            <input className="border-b" type="text" name="name" onChange={ this.handleChange } value={ this.state.name } />
          </div>

          <div className="mb-4 flex flex-col">
            <label className="font-bold" htmlFor="nativeLang">Choose a native language:</label>
            <Select id='nativeLang'
              name="nativeLang"
              options={ langOptions }
              onChange={ e => this.handleChangeNativeLang(e) } />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="font-bold" htmlFor="targetLang">Choose a target language</label>
            <Select id='targetLang'
              name="targetLang"
              options={ langOptions }
              onChange={ e => this.handleChangeTargetLang(e) } />
          </div>
          <div className="flex flex-col border mb-5">
            <span className="text-center text-lg font-bold">Words</span>
            <label className="text-center mb-2 text-md" htmlFor="words">{ this.props.vocablist.nativeLang } – { this.props.vocablist.targetLang }</label>
            { Words }
          </div>
          <button className="w-full py-4 px-2 bg-gray-800 text-white mx-auto block font-bold">
            Update
            </button>
        </form>
      </div>
    )
  }
}

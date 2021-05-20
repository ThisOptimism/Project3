import axios from 'axios';
import React from 'react';
import { capitalize } from '../services/helpers';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

class SideBar extends React.Component {
  state = {
    showVocabList: false, 
    showNewVocabListForm: false,
    newVocabListName: 'Vocab from ' + this.props.textTitle,
    myVocabLists: [],
    successMessage: '',
  }


  componentDidMount = () => {

    this.updateDisplayedVocabLists();

  }

  updateDisplayedVocabLists = () => {
    axios.get(`/api/vocabList/myVocabLists/${this.props.user._id}`)
    .then(response => {
      console.log(response);
      
      const newListOptions = response.data.map(list => {
         return({ value: list._id, label: list.name });

      })
      
      this.setState({
        myVocabLists: newListOptions
      })
      
    })
  }

  createVocabList = e => {

    const form = e.target;
    
    e.preventDefault();

    axios.post('/api/vocabList/addVocabList', 
      { name:form.name.value ,
        nativeLang: this.props.sourceLang,
        targetLang: this.props.targetLang,
        words: [[this.props.sourceLangWord, this.props.targetLangWord]],
        createdBy: this.props.user._id
      }).then(response => {
        this.setState({
          successMessage: response.data.successMessage,
        })
        console.log(response);
        
      })

      this.updateDisplayedVocabLists();

      setTimeout(() => {
      
        this.setState({
          newVocabListName: '',
          showVocabList: false,
          showNewVocabListForm: false,
          successMessage: ''
        })
        this.props.showSideBar()
      }, 2000)
  }

  addToVocabLists = (e) => {
    
    e.preventDefault();
    if (e.target.listsToAddTo.length > 1) {
      for (let list of e.target.listsToAddTo) {
          this.addWordToList(list.value)
      }
    } else {
      this.addWordToList(e.target.listsToAddTo.value)
    }

    setTimeout(() => {
      
      this.setState({
        showVocabList: false,
        showNewVocabListForm: false,
        successMessage: ''
      })
      this.props.showSideBar()
    }, 3000)
  }

  addWordToList = listId => {
    console.log('adding word to list')
    axios.put(`/api/vocabList/addWord/${listId}`, {word: [this.props.sourceLangWord, this.props.targetLangWord]})
    .then(response => {
      console.log(response)
      this.setState({
        successMessage:response.data.successMessage,
      })
    })

  }

  handleChange = e => {
    this.setState({
      newVocabListName: e.target.value
    })
  }

  showVocabList = () => {
    console.log('showing vocab list');
    if (!this.state.showVocabList)  this.updateDisplayedVocabLists();

    this.setState({ showVocabList: !this.state.showVocabList })
  }
  
  render() {

//     // 
// aside {
//   border: 1px black solid;
//   position: absolute;
//   height: 200px;
//   right: 0;
//   animation: sidebarReveal 0.5s ease-in-out;
// /
// class="absolute right-10 top-1/4 text-left border-4 border-black p-10 h-auto rounded-md"
    return (
      <aside className="fixed w-screen left-0 md:left-auto md:w-1/3 md:right-20 top-1/4  h-auto rounded-md  flex flex-col text-center p-6 bg-gray-100 rounded-md aside">
        <button onClick={this.props.showSideBar} className="text-white  py-1 px-2 rounded self-end">✖️</button>

        { this.state.successMessage &&
            <h1 className="text-center text-lg text-green-900 p-1 bg-green-200 border-2 border-green-500 rounded-lg ">{ this.state.successMessage } ✅</h1>
        }

        <div className="translation">
          <h3 className="text-3xl font-bold">{ capitalize(this.props.targetLangWord) }</h3>
          <h4 className="text-2xl pb-2">{ capitalize(this.props.sourceLangWord) }</h4>
        </div>

        <button className="w-full mr-1 py-2 px-4 rounded flex justify-between" onClick={ this.showVocabList} >Add to a vocabulary list <span>{this.state.showVocabList ? '➖' : "➕"}</span></button>
        <hr />
        {this.state.showVocabList && 
        <>
          <form onSubmit={this.addToVocabLists}>
            <h3 className="p-2">Add to one of your lists:</h3>
            <div className="flex w-full justify-around">
              <Select components={animatedComponents} id="listsSelect" options={ this.state.myVocabLists } isMulti name="listsToAddTo" className="basic-multi-select w-3/4" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white rounded w-1/4">Add</button>
            </div>
          </form>
          
          <hr />
          <button className="py-2 px-4 rounded flex justify-between" onClick={() => {this.setState({ showNewVocabListForm: !this.state.showNewVocabListForm })}}> Or create a new one <span>{this.state.showNewVocabListForm ? '➖' : "➕"}</span></button>

          {this.state.showNewVocabListForm && 
            <form onSubmit={this.createVocabList}>
              <input value={ this.state.newVocabListName } onChange={this.handleChange} placeholder="Name of new list" name="name" id="listName" className="p-2  w-3/4" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white w-1/4 py-2 px-4 rounded">Create</button>
            </form>
          }



       </>
       }
      </aside>
    )
  }
}

export default SideBar;

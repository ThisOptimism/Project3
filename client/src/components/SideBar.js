import axios from 'axios';
import React from 'react';
import { capitalize } from '../services/helpers';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

class SideBar extends React.Component {
  state = {
    showVocabList: true,
    showNewVocabListForm: false,
    newVocabListName: 'Vocab from ' + this.props.textTitle,
    myVocabLists: []
  }


  componentDidMount = () => {

    this.updateDisplayedVocabLists();

  }

  updateDisplayedVocabLists = () => {
    console.log('updating lists');
    
    axios.get(`http://localhost:5005/api/vocabList/myVocabLists/${this.props.user._id}`)
    .then(response => {
      response.data.map(list => {
        const newListOption = ({ value: list._id, label: list.name });
        this.setState(state => {
          myVocabLists: state.myVocabLists.push(newListOption)
        })
        return newListOption;
      })

    })
  }

  createVocabList = e => {

    const form = e.target;
    
    e.preventDefault();

    axios.post('http://localhost:5005/api/vocabList/addVocabList', 
      { name:form.name.value ,
        nativeLang: this.props.sourceLang,
        targetLang: this.props.targetLang,
        words: [[this.props.sourceLangWord, this.props.targetLangWord]],
        createdBy: this.props.user._id
      })

      this.updateDisplayedVocabLists();

      setTimeout(() => {
      
        this.setState({
          newVocabListName: '',
          showVocabList: false,
          showNewVocabListForm: false,
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
      })
      this.props.showSideBar()
    }, 2000)
  }

  addWordToList = listId => {
    console.log('adding word to list')
    axios.put(`http://localhost:5005/api/vocabList/addWord/${listId}`, {word: [this.props.sourceLangWord, this.props.targetLangWord]})
    .then(response => console.log(response))

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
      <aside className="fixed w-screen left-0 md:left-auto md:w-1/3 md:right-20 top-1/4  h-auto rounded-md  flex flex-col text-center p-6 bg-white bg-opacity-75 rounded-md">
        <button onClick={this.props.showSideBar} className="text-white  py-1 px-2 rounded self-end">✖️</button>
        <div className="translation">
          <h3 className="text-3xl font-bold">{ capitalize(this.props.targetLangWord) }</h3>
          <h4 className="text-2xl pb-2">{ capitalize(this.props.sourceLangWord) }</h4>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white mr-1 py-2 px-4 rounded" onClick={ this.showVocabList} >add to vocabulary list</button>

        {this.state.showVocabList && 
        <>
          <form onSubmit={this.addToVocabLists}>
            <h3>My Lists</h3>
            <Select components={animatedComponents} id="listsSelect" options={ this.state.myVocabLists } isMulti name="listsToAddTo" className="basic-multi-select" />
            <button type="submit" className="bg-green-500">Add to your lists</button>
          </form>

          <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded" onClick={() => {this.setState({ showNewVocabListForm: true })}}>Create a new Vocab list</button>

          {this.state.showNewVocabListForm && 
            <form onSubmit={this.createVocabList}>
              <label htmlFor="listName">Name of List:</label>
              <input value={ this.state.newVocabListName } onChange={this.handleChange} name="name" id="listName" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded">Create</button>
            </form>
          
          }
       </>
       }
      </aside>
    )
  }
}

export default SideBar;

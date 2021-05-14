import axios from 'axios';
import React from 'react';

class SideBar extends React.Component {
  state = {
    showVocabList: true,
    showNewVocabListForm: false,
    newVocabListName: 'Vocab from ' + this.props.textTitle,
    myVocabLists: []
  }

  componentDidMount = () => {

    this.updateVocabLists();

  }

  updateVocabLists = () => {
    console.log('updating lists');
    
    axios.get(`http://localhost:5005/api/vocabList/myVocabLists/${this.props.user._id}`)
    .then(response => {
      const mappedLists = response.data.map(list => <li>{list.name}</li>)
      this.setState({
        myVocabLists:mappedLists,
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

      this.updateVocabLists();

      this.setState({
        newVocabListName: '',
        showVocabList: false,
        showNewVocabListForm: false,
      })

 
  }

  handleChange = e => {
    this.setState({
      newVocabListName: e.target.value
    })
  }

  showVocabList = () => {
    console.log('showing vocab list');
    
    this.updateVocabLists();

    this.setState({ showVocabList: !this.state.showVocabList })
  }
  
  render() {

    return (
      <aside>
        <div className="translation">
          <h3>{ this.props.targetLangWord }</h3>
          <h4>{ this.props.sourceLangWord }</h4>
          <p>Definition</p>
        </div>

        <button onClick={ this.showVocabList} >add to vocabulary list</button>

        <button>Already Read</button>
        {this.state.showVocabList && 
        <>
          <h3>your lists</h3>
          { this.state.myVocabLists }
          <button onClick={() => {this.setState({ showNewVocabListForm: true })}}>Create a new Vocab list</button>
          {this.state.showNewVocabListForm && 
          <form onSubmit={this.createVocabList}>
            <label htmlFor="listName">Name of List:</label>
            <input value={ this.state.newVocabListName } onChange={this.handleChange} name="name" id="listName" />
            <button type="submit" >Submit</button>
          </form>
          
          }
       </>
       }
      </aside>
    )
  }
}

export default SideBar;

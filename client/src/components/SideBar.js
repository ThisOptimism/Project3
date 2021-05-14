import axios from 'axios';
import React from 'react';

class SideBar extends React.Component {
  state = {
    showVocabList: false,
    showNewVocabListForm: false,
    newVocabListName: 'Vocab from ' + this.props.textTitle,
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

  }

  handleChange = e => {
    this.setState({
      newVocabListName: e.target.value
    })
  }
  
    render() {
    // console.log(this.props.sourceLangWord);

    // getUsersVocabLists = () => {

    // }



    return (
      <aside>
        <div className="translation">
          <h3>{ this.props.targetLangWord }</h3>
          <h4>{ this.props.sourceLangWord }</h4>
          <p>Definition</p>
        </div>

        <button onClick={ e => this.setState({ showVocabList: !this.state.showVocabList }) }>add to vocabulary list</button>

        <button>Already Read</button>
        {this.state.showVocabList && 
        <>
          <h3>your lists</h3>
          <button onClick={() => this.setState({ showNewVocabListForm: true })}>Create a new Vocab list</button>
          {this.state.showNewVocabListForm && 
          <form onSubmit={this.createVocabList}>
            <label for="listName">Name of List:</label>
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

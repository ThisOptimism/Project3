import axios from 'axios';
import React, { Component } from 'react';
// import sampleText from '../sampleText';
import TextDiv from './TextDiv';
import AddText from './AddText';

export default class LibraryPage extends Component {

  state= {
    texts: [],
    name:'',
    author: ''
  }

  componentDidMount = () => {
    this.getAllTexts();
  }
  
  getAllTexts = () => {
    axios.get('http://localhost:5005/api/textList/allText')
    .then(
      response => {
        console.log(response.data)
        this.setState({
          texts: response.data
          // map(text => <TextDiv key={text._id} text={text}/>)
          //It it difficult to filter over an array with a TextDiv component
          //The original array is composed of object - the key are more easily accessible
  
        })
      }
    )
  }

  handleQueryChange = e => {
    console.log(e.target.value)
    this.setState({
      name : e.target.value
    })
  }

  render() {

 let filterredTexts = this.state.texts.filter(e => {
   return (`${e.title.toLowerCase()} ${e.author.toLowerCase()}`.includes(this.state.name.toLowerCase()))
 }) 

 let mappedTexts = filterredTexts.map(text => <TextDiv key={text._id} text={text}/>)
    
    return (
      <main>
        <h1>Library Page</h1>
        <form>
        <label>
          Title / Author:
        </label>
          <input type="text"                 
          value={this.state.name} 
          onChange={this.handleQueryChange} />
        </form>
      {this.props.user && <AddText getText={this.getAllTexts}/> }                               
      {mappedTexts}
      </main>
    )
  }
}

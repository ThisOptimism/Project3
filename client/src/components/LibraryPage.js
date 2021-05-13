import axios from 'axios';
import React, { Component } from 'react';
import sampleText from '../sampleText';
import TextDiv from './TextDiv';

export default class LibraryPage extends Component {

  state= {
    mappedTexts: []
  }

  componentDidMount = () => {
    this.getAllTexts();
  }
  
  getAllTexts = () => {
    axios.get('http://localhost:5005/api/textList/allText')
    .then(
      response => {
        this.setState({
          mappedTexts: response.data.map(text => <TextDiv key={text._id} text={text}/>)
        })
      }
    )
  }


  render() {
    console.log(sampleText);
    
    return (
      <main>
        <h1>Library Page</h1>
      {this.state.mappedTexts}
      </main>
    )
  }
}

import axios from 'axios';
import React, { Component } from 'react';
import sampleText from '../sampleText';
import TextDiv from './TextDiv';
import AddText from './AddText';

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
          mappedTexts: response.data.map(text => <TextDiv key={text._id} text={text} setUser={ this.setUser }/>)
        })
      }
    )
  }


  render() {   
    return (
      <main>
        <h1>Library Page</h1>
      {this.state.mappedTexts}
      {this.props.user && <AddText getText={this.getAllTexts}/> }
      </main>
    )
  }
}

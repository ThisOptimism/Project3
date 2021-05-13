import React, { Component } from 'react';
import sampleText from '../sampleText';
import TextDiv from './TextDiv';

export default class LibraryPage extends Component {

  



  render() {
    console.log(sampleText);

    const mappedTexts = sampleText.map(text => <TextDiv key={text._id} text={text}/>)
    
    return (
      <div>
        <h1>Library Page</h1>
      {mappedTexts}
      </div>
    )
  }
}

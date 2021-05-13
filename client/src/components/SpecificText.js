import axios from 'axios';
import React, { Component } from 'react';


export default class SpecificText extends Component {

  state= {
    textTitle: '',
    textBody: '',
  }

  componentDidMount = () => {
    
    axios.get(`http://localhost:5005/api/textList/findText/${this.props.match.params.id}`) 
    .then(text => {
      // console.log(text.data);

      const clickableText = this.makeTextClickable(text.data.body)
      this.setState({
        textTitle: text.data.title,
        textBody: clickableText,
      })
    })
    .catch(err => console.log(err)
    )
  }

  makeTextClickable = (text) => {
    // const splitText = this.splitText(text);
    
    const clickableText = 
      text.split(/\s+/)
        .map(word => 
          <span onClick={e => console.log(this.prepWordForApi(e.target.innerText))}>{word + ' '}</span>
        );

    return clickableText;
  }

  prepWordForApi(word) {
    console.log('word: ', word);
    console.log(word[word.length-3]);
    
    console.log(word.replace(/'/g,''));
    
    
    // if (word.indexOf('n') >= 0) {
    //   console.log('removing apostrophe');
      
    //   word.slice(word.indexOf("'"))
    // }

    console.log(word.split())
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  }

  render() {
    console.log(this.props.match.params.id)


    return (
      <div>
        <h1>{this.state.textTitle}</h1>
        <p>{this.state.textBody}</p>
      </div>
    )
  }
}

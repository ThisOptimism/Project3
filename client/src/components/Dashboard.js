import React, { Component } from 'react'
import VocabList from './VocabList';
import TextDiv from './TextDiv';
import axios from 'axios';



export default class Dashboard extends Component {
  state = {
    randomText: null
  }

  componentDidMount() {
    this.randomText()
  }

  randomText = () => {
    axios.get('/api/textList/randomtext')
      .then(randomText => {
        console.log(randomText.data);
        
        this.setState({
          randomText: randomText.data
        })
      })
  }

  render() {
    return (
      <div className="p-10 grid md:grid-cols-2 gap-20 grid-cols-1 min-h-full bg-white">
        <VocabList user={ this.props.user } />
        <div>
        <h1 className="ml-5 font-bold text-3xl">Random Text:</h1>
          { this.state.randomText && <TextDiv text={ this.state.randomText } /> }
        </div>
        
      </div>
    )
  }
}



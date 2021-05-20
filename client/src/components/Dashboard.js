import React, { Component } from 'react'
import VocabList from './VocabList';
import TextDiv from './TextDiv';
import axios from 'axios';



export default class Dashboard extends Component {
  state = {
    randomText: null,
    userFavorite: []
  }

  componentDidMount() {
    this.randomText();
    this.getUser();
  }

  randomText = () => {
    axios.get('/api/textList/randomtext')
      .then(randomText => {
        this.setState({
          randomText: randomText.data
        })
      })
  }

  getUser = () => {
    axios.get(`/api/auth/getuser/${this.props.user._id}`)
      .then(user => {
        console.log(user.data);
        
        this.setState({
          userFavorite: user.data.favoriteText
        })
      })
  }
 

  render() {

    return (
      <div className="p-10 grid md:grid-cols-2 gap-20 grid-cols-1 min-h-full bg-white" >
        <VocabList user={ this.props.user } />
        <div>
          <h1 className=" font-bold text-3xl">Random Text:</h1>
          { this.state.randomText && <TextDiv text={ this.state.randomText } /> }
          <h1 className="mt-10 font-bold text-3xl">Favorit Texts: </h1>
          <div className="grid grid-cols-2">
            { this.state.userFavorite && this.state.userFavorite.map(text => {
              return <TextDiv key={text._id} text={text} />
            })}
          </div>
        </div>
      </div>
    )
  }
}



import React from 'react'
import translator from '../services/translate'
import SideBar from './SideBar'

class Home extends React.Component {
  state = {
    sideBar: false,
    wordToBeTranslated: ''
  }

  showSideBar = (e) => {
    this.setState({
      sideBar: !this.state.sideBar,
      wordToBeTranslated: e.target.innerText
    })
  }

  render() {
    return (
      <main>
        <h1 onClick={ e => this.showSideBar(e) } > Headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ducimus?</p>
        <button onClick={ e => this.showSideBar(e) }>show SideBar</button>
        { this.state.sideBar && <SideBar wordToBeTranslated={ this.state.wordToBeTranslated } /> }
      </main >
    )
  }
}

export default Home;
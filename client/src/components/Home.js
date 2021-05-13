import React from 'react'
import translator from '../services/translate'
import SideBar from './SideBar'

class Home extends React.Component {
 


  render() {
    return (
      <main>
        <h1 onClick={ e => this.showSideBar(e) } > Headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ducimus?</p>
      </main>
    )
  }
}

export default Home;
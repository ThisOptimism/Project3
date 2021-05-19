import React, { Component } from 'react'

export default class UpdateWords extends Component {
  state = {
    nativeWord: this.props.word[0],
    targetWord: this.props.word[1]
  }

  render() {
    return (
      <>
        <div className="flex flex-row">
          <input
            className="input bg-gray-100 text-gray-600 focus:text-black focus:outline-none"
            name="natWords"
            onChange={ e => this.setState({ nativeWord: e.target.value }) }
            value={ this.state.nativeWord } />
          <input className="input bg-gray-100 text-gray-600 focus:text-black focus:outline-none"
            name="tarWords"
            onChange={ e => this.setState({ targetWord: e.target.value }) }
            value={ this.state.targetWord } />
        </div>
      </>
    )
  }
}

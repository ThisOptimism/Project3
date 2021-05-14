import React from 'react';

class SideBar extends React.Component {
  state = {
    showVocabList: false,
  }

  render() {
    console.log(this.props.sourceLangWord);

    return (
      <aside>
        <div className="translation">
          <h3>{ this.props.targetLangWord }</h3>
          <h4>{ this.props.sourceLangWord }</h4>
          <p>Definition</p>
        </div>

        <button onClick={ e => this.setState({ showVocabList: !this.state.showVocabList }) }>add to vocabulary list</button>

        <button>Already Read</button>
        {this.state.showVocabList && <h3>your lists</h3> }
      </aside>
    )
  }
}

export default SideBar;

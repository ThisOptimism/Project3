import React from 'react';

class SideBar extends React.Component {
  state = {
    showVocabList: false,
  }

  render() {
    console.log(this.props.word);

    return (
      <aside>
        <div className="translation">

          <h3>{ this.props.word }</h3>
          <p>definition</p>
        </div>

        <button onClick={ e => this.setState({ showVocabList: !this.state.showVocabList }) }>add to vocabulary list</button>

        <button>Already Read</button>
        {this.state.showVocabList && <h3>your lists</h3> }
      </aside>
    )
  }
}

export default SideBar;

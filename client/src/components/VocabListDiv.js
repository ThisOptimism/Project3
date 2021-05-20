import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import UpdateVocabList from './UpdateVocabList'



export default class VocabListDiv extends Component {
  state = {
    showUpdateForm: false
  }

  setUpdateForm = () => {
    this.setState({
      showUpdateForm: !this.state.showUpdateForm
    })
  }

  deleteList = () => {
    axios.delete(`/api/vocabList/deleteVocabList/${this.props.vocablist._id}`)
      .then(list => {
        this.props.setMessage(list.data.message)
        this.props.getVocabList()
        setTimeout(() => {
          this.props.setMessage('')
        }, 2000)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="mb-10 mx-10">
        <Link to={ `/vocablist/${this.props.vocablist._id}` }>
          <div className=" bg-gray-50 min-w-min border-2 rounded-lg p-5 pb-10 relative hover:bg-blue-100 transition-colors">
            <h3 className="inline-block text-lg font-bold">{ this.props.vocablist.name }</h3><br />
            <span className="italic" > {
              this.props.vocablist.nativeLang
            } </span> – <span className="italic">{ this.props.vocablist.targetLang }</span><br />
            { this.props.user.username
              && <h6 className="inline-block"><strong>created by: </strong>{ this.props.vocablist.createdBy.username }</h6> }
          </div>
        </Link>
        <div className="relative -top-5 left-5">
          <button onClick={ e => this.setState({ showUpdateForm: !this.state.showUpdateForm }) }
            className="mr-4 py-2 px-4 text-white rounded-lg font-bold bg-gray-800">Update</button>
          <button onClick={ this.deleteList }
            className="px-4 py-2 bg-white text-red-400 border border-red-400 hover:bg-red-400 hover:text-white font-bold rounded-lg transition-all">delete</button>
        </div>
        {
          this.state.showUpdateForm
          && <UpdateVocabList
            setUpdateForm={ this.setUpdateForm }
            getVocabList={ this.props.getVocabList }
            vocablist={ this.props.vocablist } />
        }
      </div>
    )
  }
}



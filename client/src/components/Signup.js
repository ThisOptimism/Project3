import React, { Component } from 'react'
import { signup } from '../services/auth';
import { Link } from 'react-router-dom';

export default class Signup extends Component {

  state = {
    username: '',
    password: '',
    email: '',
    nativeLang: 'EN',
    targetLang: 'EN',
    message: '',
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, password, email, nativeLang, targetLang } = this.state;
    signup(username, password, email, nativeLang, targetLang)
      .then(response => {
        if (response.message) {
          this.setState({
            message: response.message,
            username: '',
            password: '',
            email: ''
          })
        } else {
          this.props.setUser(response);
          this.props.history.push('/dashboard');
        }
      })
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-around">
        <form className="flex flex-col justify-center items-center bg-white bg-opacity-70 w-96 min-w-min  mt-4 p-6 rounded shadow-2xl " onSubmit={ this.handleSubmit }>
        <h2 className="text-2xl mb-2">Signup</h2>


          {/* <label htmlFor="username">Username: </label> */}
          <input
            className="m-2 rounded-lg p-2 text-center"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value={ this.state.username }
            onChange={ this.handleChange }
          />
          {/* <label htmlFor="email">Email: </label> */}
          <input
            className="m-2 rounded-lg p-2 text-center"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={ this.state.email || '' }
            onChange={ this.handleChange }
          />
          {/* <label htmlFor="password">Password: </label> */}
          <input
            className="m-2 rounded-lg p-2 text-center"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={ this.state.password }
            onChange={ this.handleChange }
          />
          <label htmlFor="nativeLang">Native Language: </label>
          <select name="nativeLang" id="nativeLang" value={ this.state.nativeLang } onChange={ this.handleChange }           className="m-2 rounded-sm p-2 text-center">
            <option value="EN">English</option>
            <option value="GER">German</option>
            <option value="FR">French</option>
            <option value="ES">Spanish</option>
          </select>

          <label htmlFor="targetLang">Target Language: </label>
          <select name="targetLang" id="targetLang" value={ this.state.targetLang } onChange={ this.handleChange } className="m-2 rounded-sm p-2 text-center">
            <option value="EN">English</option>
            <option value="GER">German</option>
            <option value="FR">French</option>
            <option value="ES">Spanish</option>
          </select>
          <button className="bg-blue-500 py-2 px-3 rounded-lg hover:bg-blue-700 hover:text-white  duration-500" type="submit">Sign Up</button>
          { this.state.message && (
            <h3 className="text-red-700 text-center p-3">{ this.state.message }</h3>
          ) }
        <p className="mt-2">Already have an account? <Link to="/login" className="text-blue-800 underline">Login</Link></p>
        </form>
      </div>
    )
  }
}
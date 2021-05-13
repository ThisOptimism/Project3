import React, { Component } from 'react'
import { signup } from '../services/auth';

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
          this.props.history.push('/');
        }
      })
  }

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            name="username"
            value={ this.state.username }
            onChange={ this.handleChange }
          />
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            value={ this.state.email || '' }
            onChange={ this.handleChange }
          />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            name="password"
            value={ this.state.password }
            onChange={ this.handleChange }
          />
          <label htmlFor="nativeLang">Native Language: </label>
          <select name="nativeLang" id="nativeLang" value={ this.state.nativeLang } onChange={ this.handleChange }>
            <option value="EN">English</option>
            <option value="GER">German</option>
            <option value="FR">French</option>
            <option value="ES">Spanish</option>
          </select>

          <label htmlFor="targetLang">Target Language: </label>
          <select name="targetLang" id="targetLang" value={ this.state.targetLang } onChange={ this.handleChange }>
            <option value="EN">English</option>
            <option value="GER">German</option>
            <option value="FR">French</option>
            <option value="ES">Spanish</option>
          </select>
          <button type="submit">Sign Up</button>
          { this.state.message && (
            <h3>{ this.state.message }</h3>
          ) }
        </form>
      </div>
    )
  }
}
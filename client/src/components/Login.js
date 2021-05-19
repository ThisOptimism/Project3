import React, { Component } from 'react'
import { login } from '../services/auth';
import { Link } from 'react-router-dom'

export default class Login extends Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    login(username, password)
      .then(response => {
        if (response.message) {
          this.setState({
            message: response.message,
            username: '',
            password: ''
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
        <h2 className="text-2xl mb-2">Login</h2>
        <input
            className="m-2 rounded-lg p-2 text-center"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value={ this.state.username }
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
          <button className="bg-blue-500 py-2 px-3 rounded-lg hover:bg-blue-700 hover:text-white  duration-500" type="submit">Log in</button>
          {this.state.message && (
            <h3 className="text-red-700 text-center p-3">{this.state.message}</h3>
          )}
        <p className="mt-2">Not got an account yet? <Link to="/signup" className="text-blue-800 underline">Sign Up</Link></p>
        </form>
      </div>
    )
  }
}
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login'

class App extends React.Component {
  state = {
    user: this.props.user
  }
  setUser = user => {
    this.setState({ user })
  }

  render() {
    return (
      <>
        <NavBar user={ this.state.user } setUser={ this.setUser } />
        <Switch>
          <Route exact path='/signup' render={ props => <Signup setUser={ this.setUser } { ...props } /> } />
          <Route exact path='/login' render={ props => <Login setUser={ this.setUser } { ...props } /> } />
        </Switch>
      </>
    )
  }
}

export default App;

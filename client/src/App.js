import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import LibraryPage from './components/LibraryPage'



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
          <Route exact path='/' component={ Home } />
          <Route exact path='/signup' render={ props => <Signup setUser={ this.setUser } { ...props } /> } />
          <Route exact path='/login' render={ props => <Login setUser={ this.setUser } { ...props } /> } />
          <ProtectedRoute path='/dashboard' user={ this.state.user } component={ Dashboard } redirectPath="/" />
          <Route exact path='/library' render={ props => <LibraryPage setUser={ this.setUser } { ...props } /> } />
        </Switch>
      </>
    )
  }
}

export default App;

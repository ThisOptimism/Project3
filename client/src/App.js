import './App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import LibraryPage from './components/LibraryPage';
import SpecificText from './components/SpecificText';
import NotFound from './components/NotFound'



class App extends React.Component {
  state = {
    user: this.props.user
  }
  setUser = user => {
    this.setState({ user })
    return user;
  }

  render() {
    return (
      <body class=" flex flex-col min-h-screen">
        <NavBar user={ this.state.user } setUser={ this.setUser } />
        <main class="flex-grow">
          <Switch>
            <Route exact path='/' component={ Home } user={ this.state.user } />
            <Route exact path='/signup' render={ props => <Signup setUser={ this.setUser } { ...props } /> } />
            <Route exact path='/login' render={ props => <Login setUser={ this.setUser } { ...props } /> } />
            <ProtectedRoute path='/dashboard' user={ this.state.user } component={ Dashboard } redirectPath="/" />
            <Route exact path='/library' render={ props => <LibraryPage user={ this.state.user } setUser={ this.setUser } { ...props } /> } />
            <Route exact path='/texts/:id' render={ props => <SpecificText user={ this.state.user } { ...props } /> } />
            <Route path="/404" component={ NotFound } />
            <Redirect to="/404" />
          </Switch>
        </main>
        <Footer />
      </body>
    )
  }
}

export default App;

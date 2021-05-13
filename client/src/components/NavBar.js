import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';

export default function NavBar(props) {
  const handleLogout = () => {
    logout().then(() => {
      props.setUser(null);
    })
  }

  return (
    <header>
      <h1>WordFish</h1>
      <ul>
        { props.user ? (
          <div className="menu">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to='/' onClick={ () => handleLogout() }>Logout</Link>
            </li>
          </div>
        ) : (
          <div className="menu">
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
        )
        }
      </ul>
    </header>
  )
}

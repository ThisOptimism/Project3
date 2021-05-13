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
    <div>
      <h1>NavBar</h1>
      <ul>
        { props.user ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to='/' onClick={ () => handleLogout() }>Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )
        }
      </ul >
    </div>
  )
}

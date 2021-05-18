import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../services/auth';

export default function NavBar(props) {
  const handleLogout = () => {
    logout().then(() => {
      props.setUser(null);
    })
  }

  return (
    <header >
      <Link to='/'><h1 class="text-4xl">LingoFish</h1></Link>
      <ul>
        { props.user ? (
          <div className="menu">
            <li>
              <NavLink to="/dashboard" activeStyle={ {
                fontWeight: "bold",
                borderBottom: "1px solid white",
                paddingBottom: "5px"
              } }>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to='/library' activeStyle={ {
                fontWeight: "bold",
                borderBottom: "1px solid white",
                paddingBottom: "5px"
              } }>Library</NavLink>
            </li>
            <li>
              <NavLink to='/vocablist' activeStyle={ {
                fontWeight: "bold",
                borderBottom: "1px solid white",
                paddingBottom: "5px"
              } }>Vocab Lists</NavLink>
            </li>
            <li>
              <NavLink to='/' onClick={ () => handleLogout() }>Logout</NavLink>
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

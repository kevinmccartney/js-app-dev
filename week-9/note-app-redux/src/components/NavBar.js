import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand navbar-dark bg-dark"
      >
        <div
          className="container"
        >
          <Link
            className="navbar-brand"
            to="/"
          >
            Notes App
          </Link>
          <Link className="nav-item btn btn-primary" to="/add">Add Note</Link>
        </div>
      </nav>
    )
  }
}

export default NavBar;

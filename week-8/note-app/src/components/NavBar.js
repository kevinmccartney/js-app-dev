import React from 'react';
import { Link } from 'react-router-dom';

// NavBar is a functional component because it has no state
const NavBar = () => (
  <nav
    className="navbar navbar-expand navbar-dark bg-dark"
  >
    <div
      className="container"
    >
      <Link
        className="navbar-brand"
        // the Link component provided by react router is essentially the same as an <a> tag except
        // that it navigates us between routes in react router & uses 'to' instead of 'href'
        to="/"
      >
        Notes App
      </Link>
      <Link
        className="nav-item btn btn-primary"
        to="/add"
      >
        Add Note
      </Link>
    </div>
  </nav>
);

export default NavBar;

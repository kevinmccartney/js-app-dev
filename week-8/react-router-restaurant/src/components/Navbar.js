import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div
    className="nav"
  >
    <Link
      to="/"
    >
      Home
    </Link>
    &nbsp;|&nbsp;
    <Link
      to="/menu"
    >
      Menu
    </Link>
    &nbsp;|&nbsp;
    <Link
      to="about"
    >
      About
    </Link>
  </div>
);

export default Navbar;

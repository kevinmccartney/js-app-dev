import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// importing all of the child routes & the navbar
import About from './components/About';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Menu from './components/Menu';

// the Routes component has no state, so it should be a functional component
const Routes = () => (
  <Router>
    {/* the Router component must have one child component */}
    <div>
      <Navbar />
      <hr />
      <Route 
        name="Home" 
        path="/" 
        component={Home}
        exact 
      />
      <Route 
        name="Menu" 
        path="/menu" 
        component={Menu} 
      />
      <Route 
        name="About" 
        path="/about" 
        component={About} 
      />
    </div>
  </Router>
);

export default Routes;


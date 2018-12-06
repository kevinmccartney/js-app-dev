import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import AddNote from './components/AddNote';
import Board from './components/Board';
import EditNote from './components/EditNote';
import Login from './components/Login';
import Logout from './components/Logout';
import NavBar from './components/NavBar';

const Router = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Route
        name="Notes"
        path="/"
        exact
        component={Board}
      />
      <Route
        name="Add Note"
        path="/add"
        component={props => (
          <AddNote
            {...props}
          />
        )}
      />
      <Route
        name="Edit Note"
        path="/edit/:id"
        component={EditNote}
      />
      <Route
        name="Login"
        path="/login"
        component={Login}
      />
      <Route
        name="Logout"
        path="/logout"
        component={Logout}
      />
    </div>
  </BrowserRouter>
);

export default Router;

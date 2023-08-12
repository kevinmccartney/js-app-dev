import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import { getAuthStatus } from './services/auth';
import AddNote from './components/AddNote';
import Board from './components/Board';
import EditNote from './components/EditNote';
import Login from './components/Login';
import Logout from './components/Logout';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';

const isAuthed = getAuthStatus();

const Router = () => (
  <BrowserRouter>
    <div>
      {isAuthed && <NavBar />}
      <ProtectedRoute
        name="Notes"
        path="/"
        exact
        component={Board}
      />
      <ProtectedRoute
        name="Add Note"
        path="/add"
        component={props => (
          <AddNote
            {...props}
          />
        )}
      />
      <ProtectedRoute
        name="Edit Note"
        path="/edit/:id"
        component={EditNote}
      />
      <Route
        name="Login"
        path="/login"
        component={Login}
      />
      <ProtectedRoute
        name="Logout"
        path="/logout"
        component={Logout}
      />
    </div>
  </BrowserRouter>
);

export default Router;

import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import AddNote from './components/AddNote';
import Board from './components/Board';
import EditNote from './components/EditNote';
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
    </div>
  </BrowserRouter>
);

export default Router;

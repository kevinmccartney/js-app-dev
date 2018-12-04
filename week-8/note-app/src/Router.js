import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import AddNote from './components/AddNote';
import Board from './components/Board';
import EditNote from './components/EditNote';
import NavBar from './components/NavBar';

// this component is a functional component because it doesn't have any internal state
// https://programmingwithmosh.com/react/react-functional-components/
const Router = ({
  addNote,
  deleteNote,
  notes,
  updateNote,
}) => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Route
        // we need to use the `exact` prop so that the Board component doesn't render for every
        // route, since every route will have '/' as its base 
        exact
        name="Notes"
        path="/"
        // use the render prop on the Route component for inline rendering which allows us to pass
        // props into the rendered route. The callback function receives the props passed down by
        // the router as its argument
        // https://reacttraining.com/react-router/core/api/Route/render-func
        render={props => (
          <Board
            deleteNote={deleteNote}
            notes={notes}
            {...props}
          />
        )}
      />
      <Route
        name="Add Note"
        path="/add"
        render={props => (
          <AddNote
            addNote={addNote}
            {...props}
          />
        )}
      />
      <Route
        name="Edit Note"
        // Here, :id is a parameter for the /edit path
        // whatever is passed as this parameter will be available in the match.params prop
        // passed into the route by react router
        // https://reacttraining.com/react-router/web/example/url-params
        path="/edit/:id"
        render={props => (
          <EditNote
            notes={notes}
            updateNote={updateNote}
            {...props}
          />
        )}
      />
    </div>
  </BrowserRouter>
);

export default Router;

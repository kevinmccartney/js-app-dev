import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import AddNote from './components/AddNote';
import Board from './components/Board';
import EditNote from './components/EditNote';
import NavBar from './components/NavBar';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route
            name="Notes"
            path="/"
            exact
            component={props => (
              <Board
                deleteNote={this.props.deleteNote}
                notes={this.props.notes}
                {...props}
              />
            )}
          />
          <Route
            name="Add Note"
            path="/add"
            component={props => (
              <AddNote
                addNote={this.props.addNote}
                {...props}
              />
            )}
          />
          <Route
            name="Edit Note"
            path="/edit/:id"
            component={props => (
              <EditNote
                notes={this.props.notes}
                updateNote={this.props.updateNote}
                {...props}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;

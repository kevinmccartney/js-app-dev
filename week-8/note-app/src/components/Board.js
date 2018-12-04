import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../css/Board.css';
import Note from './Note';

// this component doesn't have any state, so it can be a functional component
const Board = props => {
  // we can still create "methods" inside of functional components, they are just anonymous
  // functions assigned to variables
  const renderNoNotes = () => {
    return (
      <div
        className="d-flex d-flex-column justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
        }}
      >
        <div 
          className="jumbotron"
        >
          <h1
            className="display-4"
          >
            You don't have any notes yet!
          </h1>
          <p
            className="lead"
          >
            Why don't you add a few?
          </p>
          <Link
            className="btn btn-primary btn-lg"
            to="/add"
          >
            Add a Note
          </Link>
        </div>
      </div>
    )
  }

  const renderNotes = () => {
    return (
      <div
        className="container my-5"
      >
        {// mapping through the notes passed down to the Board class from the App component to make
         // a list of notes 
          props.notes.map(note => (
          <Note
            key={note.id}
            id={note.id}
            body={note.body}
            title={note.title}
            // passing down the bound deleteNote method from the App class
            deleteNote={props.deleteNote}
          />
        ))}
      </div>
    );
  }
  
  return (
    <div className="board">
      {props.notes.length <= 0 && renderNoNotes()}
      {props.notes.length > 0 && renderNotes()}
    </div>
  );
}

export default Board;

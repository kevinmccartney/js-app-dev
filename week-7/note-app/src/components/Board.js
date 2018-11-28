import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../css/Board.css';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    }

    this.deleteNote = this.deleteNote.bind(this);
    this.renderNoNotes = this.renderNoNotes.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  updateNote(body, id) {
    const notesWithoutObjToUpdate = this.state.notes.filter(note => note.id !== id);

    this.setState({
      ...this.state,
      notes: [
        ...notesWithoutObjToUpdate,
        {

          id,
          ...body,
        }
      ]
    })
  }

  deleteNote(id){
    let newNoteArr = this.state.notes.filter(note => note.id !== id);

    this.setState(
      {
        ...this.state,
        notes: newNoteArr
      }
    );
  }

  renderNoNotes() {
    return (
      <div
        className="d-flex d-flex-column justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
        }}
      >
        <div class="jumbotron">
          <h1 class="display-4">You don't have any notes yet!</h1>
          <p class="lead">Why don't you add a few?</p>
          <Link
            class="btn btn-primary btn-lg"
            to="/add"
          >
            Add a Note
          </Link>
        </div>
      </div>
    )
  }

  renderNotes() {
    return (
      <div
        className="container my-5"
      >
        {this.props.notes.map(note => (
          <Note
            key={note.id}
            id={note.id}
            body={note.body}
            title={note.title}
            deleteNote={this.deleteNote}
            updateNote={this.updateNote}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="board">
        {this.props.notes.length <= 0 && this.renderNoNotes()}
        {this.props.notes.length > 0 && this.renderNotes()}
      </div>
    );
  }
}

export default Board;

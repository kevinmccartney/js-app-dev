import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/Board.css';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    }

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
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

  addNote() {
    this.setState({
      ...this.state,
      notes: [
        ...this.state.notes,
        {
          id: Date.now(),
        },
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

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {this.state.notes.map(note => (
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
        </div>
        <div>
          <button
            className="btn btn-success add-button"
            onClick={() => this.addNote()}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Board;

import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
     };

     this.addNote = this.addNote.bind(this);
     this.deleteNote = this.deleteNote.bind(this);
  }

  addNote() {
    const secretExists = this.state.notes.filter(note => note.hasSecret).length > 0;
    const randomInt = Math.floor(Math.random() * Math.floor(2))
    this.setState(
      {
        notes: [
          ...this.state.notes,
          {
            id: Date.now(),
            hasSecret: !secretExists && randomInt === 1,
          }
        ]
      }
    );
  }

  deleteNote(id) {
    const notesWithoutDeletedNote = this.state.notes.filter(note => note.id !== id);

    this.setState({
      notes: notesWithoutDeletedNote,
    });
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {
              this.state.notes.map(note => {
                return (
                  <Note
                    body={note.body}
                    deleteNote={this.deleteNote}
                    hasSecret={note.hasSecret}
                    id={note.id}
                    title={note.title}
                  />
                );
              })
            }
          </div>
        </div>
        <div>
          <button
            className="btn btn-primary add-button"
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
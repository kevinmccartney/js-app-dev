import React, { Component } from 'react';

// importing the custom CSS for the Board component
import '../css/Board.css';

// importing the child Note component
import Note from './Note';
class Board extends Component {
  constructor(props) {
    super(props);

    // setting up some state we will use to render, add, & delete notes
    this.state = {
      notes: []
     };

    // binding our class methods so that their 'this' context is the Board component
    // when they are called
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  // this will add a note into the notes array in the state of the
  // Board component (this.state.notes)
  addNote() {
    // returns all notes in the notes array that have a hasSecret property that is true
    const notesWithSecrets = this.state.notes.filter(note => note.hasSecret);
    // is there a note with a secret in the notes array?
    const secretExists = notesWithSecrets.length > 0;
    // this is returning a random number between 0 & 2
    const randomInt = Math.floor(Math.random() * Math.floor(2))
    this.setState(
      {
        notes: [
          ...this.state.notes,
          {
            id: Date.now(),
            // we are only allowing the hasSecret property to be set to true if there are no
            // notes that already have a secret & if the random number is 1 (there is a 1 in 3
            // chance that the note will have a secret if no notes with a secret already exist)
            hasSecret: !secretExists && randomInt === 1,
          }
        ]
      }
    );
  }

  // this will delete a note based on the id that is passed in
  deleteNote(id) {
    // we're filtering out the notes with the id that is passed into this method
    const notesWithoutDeletedNote = this.state.notes.filter(note => note.id !== id);

    // update the state with the notes that do NOT have the id passed into the method
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
              // we are rendering out the notes from the state
              this.state.notes.map(note => {
                return (
                  <Note
                    body={note.body}
                    // passing down the bound method to delete notes to the child component
                    deleteNote={this.deleteNote}
                    // the component must also know if there is a secret in the note!
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
            // here we are calling the method to add a new note
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
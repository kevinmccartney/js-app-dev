import React from 'react';

import Router from './Router';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    }

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.getNote = this.getNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  addNote(body = { title: 'New Note', body: 'This is a new note.'}) {
    this.setState({
      ...this.state,
      notes: [
        ...this.state.notes,
        {
          id: Date.now(),
          ...body,
        },
      ]
    })
  }

  deleteNote(id){
    const newNoteArr = this.state.notes.filter(note => note.id !== parseFloat(id));

    this.setState(
      {
        ...this.state,
        notes: newNoteArr
      }
    );
  }

  updateNote(body, id) {
    const notesWithoutObjToUpdate = this.state.notes.filter(note => note.id !== parseFloat(id));

    this.setState({
      ...this.state,
      notes: [
        ...notesWithoutObjToUpdate,
        {

          id: parseFloat(id),
          ...body,
        }
      ]
    })
  }

  getNote(id) {
    return this.state.notes.find(function(note) {
      return note.id === parseFloat(id);
    })
  }

  render() {
    return (
      <Router
        addNote={this.addNote}
        deleteNote={this.deleteNote}
        getNote={this.getNote}
        updateNote={this.updateNote}
        notes={this.state.notes}
      />
    )
  }
}

export default App;

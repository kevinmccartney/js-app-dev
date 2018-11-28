import React from 'react';

import Router from './Router';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    }

    this.addNote = this.addNote.bind(this);
    this.getNote = this.getNote.bind(this);
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

  getNote(id) {
    return this.state.notes.find(function(note) {
      return note.id === parseFloat(id);
    })
  }

  render() {
    return (
      <Router
        addNote={this.addNote}
        getNote={this.getNote}
        notes={this.state.notes}
      />
    )
  }
}

export default App;

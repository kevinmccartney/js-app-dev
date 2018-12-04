import React from 'react';

import Router from './Router';

// this class is the "application shell"
// it holds state & defines bound methods that can update that state it hands down to the child
// routes. This is allows us to use React router & share the data between the routes
class App extends React.Component {
  constructor(props) {
    // remember to call super to get the props of the Component class
    super(props);

    this.state = {
      notes: [],
    }
  }

  // these methods are automatically bound to the App class 'this' context because they are arrow functions

  // body is an object with the shape
  // {
  //   body: <string>
  //   title: <string>
  // }
  addNote = body => {
    this.setState({
      notes: [
        // don't forget to destructure the notes that are currently in state back into the new state object
        ...this.state.notes,
        {
          id: Date.now(),
          ...body,
        }
      ]
    });
  }

  // id is an int
  // once we filter out the note with the id that is being passed in, we can set the notes in state
  // to that new array
  deleteNote = id => {
    const newNotes = this.state.notes.filter(note => note.id !== id);

    this.setState({
      notes: newNotes,
    })
  }

  // here we are updating a note by passing in a full note object, filtering out the current note
  // that is in state & appending the new note
  updateNote = updatedNote => {
    const notesWithoutUpdatedNote = this.state.notes.filter(note => note.id !== updatedNote.id);

    this.setState({
      notes: [
        ...notesWithoutUpdatedNote,
        updatedNote,
      ]
    });
  }

  render() {
    return (
      <Router
        // passing down the state of the App class & all our bound methods
        addNote={this.addNote}
        deleteNote={this.deleteNote}
        notes={this.state.notes}
        updateNote={this.updateNote}
      />
    );
  }
}

export default App;

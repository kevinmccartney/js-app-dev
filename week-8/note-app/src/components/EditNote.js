import React from 'react';
import { Link } from 'react-router-dom';

// this component lets us update a note that already exists
class EditNote extends React.Component {
  constructor(props) {
    super(props);

      // this props is coming from the react router Route component
      // it will be the last parameter of the router
      // IE for '/edit/3', the id param would be '3'
      const id = this.props.match.params.id;

      const currentNote = this.props.notes.find(function(note) {
        // we have to use parseFloat here because the id passed down by react router is a string,
        // while the id of the note object in the App component's state is a number
        return note.id === parseFloat(id);
      })

    this.state = {
      note: currentNote,
      error: '',
    }

    // binding our class methods
    this.renderForm = this.renderForm.bind(this);
    this.submit = this.submit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  // we're using the same method as the AddNote component to update the field
  updateField(value, field) {
    const newState = Object.assign({}, this.state);

    newState.note[field] = value;

    this.setState(newState);
  }

  submit() {
    if(this.state.note.body && this.state.note.title) {
      this.props.updateNote(this.state.note);

      this.props.history.push({
        pathname: '/'
      });
    } else {
      this.setState({
        ...this.state,
        error: 'Missing required fields',
      })
    }
  }

  renderForm() {
    return (
      <React.Fragment>
        <h1>Edit Note</h1>
        <hr />
        <form>
          <div
            className="form-group"
          >
            <label
              for="noteInputTitle"
            >
              Title<i className="text-danger">*</i>
            </label>
            <input
              type="text"
              className="form-control"
              id="noteInputTitle"
              placeholder="Enter a title for the note"
              onChange={e => this.updateField(e.target.value, 'title')}
              value={this.state.note.title}
            />
          </div>
          <div
            className="form-group"
          >
            <label
              for="noteInputBody"
            >
              Body<i className="text-danger">*</i>
            </label>
            <textarea
              className="form-control"
              id="noteInputBody"
              placeholder="Enter the body of the note here..."
              onChange={e => this.updateField(e.target.value, 'body')}
              value={this.state.note.body}
            />
          </div>
        </form>
        {this.state.error && (
          <div className="alert alert-danger" role="alert">
            {this.state.error}
          </div>
        )}
        <button
          className="btn btn-primary add-button mr-2"
          onClick={() => this.submit()}
        >
          Save
        </button>
        <Link
          className="btn btn-outline-danger"
          to="/"
        >
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderNoNote() {
    return (
      <div
        className="d-flex flex-column align-items-center"
      >
        <div class="alert alert-danger lead" role="alert">
          Note not found
        </div>
        <Link
          className="btn btn-primary mt-3"
          to="/"
        >
          Go home
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div
        className="container my-5"
        style={{
          maxWidth: '750px',
        }}
      >
        {/*
          the next two lines are using short-circuit evaluation for flow control
          if the statement on the left side of the && evaluates to false, the function on the right
          won't run  
        */}
        {this.state.note && this.renderForm()}
        {!this.state.note && this.renderNoNote()}
      </div>
    )
  }
}

export default EditNote;

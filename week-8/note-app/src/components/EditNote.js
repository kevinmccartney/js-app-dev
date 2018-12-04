import React from 'react';
import { Link } from 'react-router-dom';

class EditNote extends React.Component {
  constructor(props) {
    super(props);

      const id = this.props.match.params.id;

      const currentNote = this.props.notes.find(function(note) {
        return note.id === parseFloat(id);
      })

    this.state = {
      note: currentNote,
      error: '',
    }

    this.renderForm = this.renderForm.bind(this);
    this.submit = this.submit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

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
        {this.state.note && this.renderForm()}
        {!this.state.note && this.renderNoNote()}
      </div>
    )
  }
}

export default EditNote;

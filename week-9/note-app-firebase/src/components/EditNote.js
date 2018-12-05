import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class EditNote extends React.Component {
  constructor(props) {
    super(props);

      const id = this.props.match.params.id;

      const currentNote = this.props.notes.find(function(note) {
        return note.id === id;
      })

    this.state = {
      note: currentNote,
      error: '',
    }

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
      this.props.dispatch({
        type: 'UPDATE_NOTE',
        title: this.state.note.title,
        body: this.state.note.body,
        id: this.props.match.params.id,
      });

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

  render() {
    return (
      <div
        className="container my-5"
        style={{
          maxWidth: '750px',
        }}
      >
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
}

export default connect(mapStateToProps)(EditNote);

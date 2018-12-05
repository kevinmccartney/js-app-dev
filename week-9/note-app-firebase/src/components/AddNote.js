import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addNote } from '../services/redux/actionCreators';
import { submitNote } from '../services/api';

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      error: '',
    }

    this.submit = this.submit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  updateField(value, field) {
    const newState = Object.assign({}, this.state);

    newState[field] = value;

    this.setState(newState);
  }

  async submit() {
    if(this.state.body && this.state.title) {
      const newNote = await submitNote({
        body: this.state.body,
        title: this.state.title,
      });

      this.props.dispatch(addNote(newNote));

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
        <h1>New Note</h1>
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
              value={this.state.title}
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
              value={this.state.body}
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

export default connect()(AddNote);

import React from 'react';
import { Link } from 'react-router-dom';

// this route will allow you to create a new note
class AddNote extends React.Component {
  constructor(props) {
    super(props);

    // here we are setting up some state for the form to use
    this.state = {
      body: '',
      error: '',
      title: '',
    }

    // binding our class methods
    this.submit = this.submit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  // this method takes in two values - value & field
  // value is the literal value that we want to use
  // field is the field name in state that we should be updating
  updateField(value, field) {
    // here we are creating a new copy of the state so that we aren't mutating the state before we
    // update it
    const newState = Object.assign({}, this.state);

    // here we are using bracket notation to dynamically reference the object property we want
    // to update
    newState[field] = value;

    this.setState(newState);
  }

  submit() {
    // don't submit the form if the title or body fields are empty
    if(this.state.body && this.state.title) {
      // calling the bound method that is passed down from the App class to update the notes
      // in the App component's state
      this.props.addNote({
        body: this.state.body,
        title: this.state.title,
      });

      // redirecting to the homepage once we are done submitting the form
      this.props.history.push({
        pathname: '/'
      });
    } else {
      // if there are missing fields, display an error message
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
              className="form-control"
              id="noteInputTitle"
              // using the class method to update the title in the component's state
              // notice how we are passing the value of the input & the name of the field to
              // update in state
              onChange={e => this.updateField(e.target.value, 'title')}
              placeholder="Enter a title for the note"
              type="text"
              // this is a controlled component because we are passing in a value from state as
              // the value. This means that the value of the field will always be the same as the
              // field value in state
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
              onChange={e => this.updateField(e.target.value, 'body')}
              placeholder="Enter the body of the note here..."
              value={this.state.body}
            />
          </div>
        </form>
        {/* if there is an error in state, display the error message */
          this.state.error && (
          <div
            className="alert alert-danger"
            role="alert"
          >
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

export default AddNote;

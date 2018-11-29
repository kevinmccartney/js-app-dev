import React from 'react';

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

  submit() {
    if(this.state.body && this.state.title) {
      this.props.addNote({
        title: this.state.title,
        body: this.state.body,
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
          className="btn btn-primary add-button"
          onClick={() => this.submit()}
        >
          Add
        </button>
      </div>
    )
  }
}

export default AddNote;
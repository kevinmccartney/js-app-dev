import React, {Component} from 'react';
import '../css/Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      body: this.props.body,
      editMode: false,
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // this.updateBodyValue = this.updateBodyValue.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  toggleEditMode = () => {
    if(this.state.editMode) {
      this.setState({
        title: this.props.title,
        body: this.props.body,
        editMode: false,
      })
    } else {
      this.setState({
        ...this.state,
        editMode: true,
      })
    }
  }

  handleUpdate(e, field) {
    const newState = Object.assign({}, this.state);

    newState[field] = e.target.value;

    this.setState({
      ...newState,
    });
  }

  // updateBodyValue(e) {
  //   this.setState({
  //     body: e.target.value,
  //   });
  // }

  handleSave() {
    this.props.updateNote(
      {
        title: this.state.title,
        body: this.state.body,
      },
      this.props.id
    );

    this.setState({
      editMode: false,
    });
  }

  handleDelete() {
    this.props.deleteNote(this.props.id);
  }

  render() {
    const componentsToRender = this.state.editMode
      ?
      (
        <React.Fragment>
          <textarea
            ref="titleContent"
            className="title-textarea"
            // defaultValue={this.props.title}
            value={this.state.title}
            onChange={e => this.handleUpdate(e, 'title')}
          />
          <textarea
            ref="bodyContent"
            className="body-textarea"
            // defaultValue={this.props.title}
            value={this.state.body}
            onChange={e => this.handleUpdate(e, 'body')}
          />
          <div>
            <button
              className="btn btn-danger"
              onClick={() => this.toggleEditMode()}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.handleSave()}
            >
              Save
            </button>
          </div>
        </React.Fragment>
      )
      :
      (
        <React.Fragment>
          <h5>{this.state.title}</h5>
          <p>{this.state.body}</p>
          <div>
            <button
              className="btn btn-info"
              onClick={() => this.toggleEditMode()}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete()}
            >
              Delete
            </button>
          </div>
        </React.Fragment>
      );
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            {componentsToRender}
          </div>
        </div>
      </div>
    );
  }
}

Note.defaultProps = {
  body: "New Note Body",
  title: "New Note Title",
};

Note.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string,
}

export default Note;

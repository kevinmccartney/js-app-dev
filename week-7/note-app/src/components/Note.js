import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Note.css';

class Note extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      body: this.props.body,
      isRead: this.props.isRead,
      title: this.props.title,
      editMode: false
    }
  }

  handleDelete = () => {
    this.props.deleteNote(parseFloat(this.props.id));
  }

  handleEdit = () => {
    this.setState({
      editMode: true
    });
  }

  handleSave = () => {
    this.setState({
      ...this.state,
      title: this.refs.titleContent.value,
      body: this.refs.bodyContent.value,
      editMode: false
    });
  }

  toggleRead = () => {
    this.setState(state => {
      return {
        ...state,
        isRead: !this.state.isRead,
      };
    });
  }

  render() {
    let componentToRender;

    if(this.state.editMode) {
      componentToRender = (
        <React.Fragment>
          <textarea
            className="title-textarea"
            defaultValue={this.state.title}
            ref="titleContent"
          />
          <textarea
            className="body-textarea"
            defaultValue={this.state.body}
            ref="bodyContent"
          />
          <div>
            <button
              className="btn btn-primary"
              onClick={() => this.handleSave()}
            
            >
              Save
            </button>
          </div>
        </React.Fragment>
      );
    } else {
      componentToRender = (
        <React.Fragment>
          <h5>{this.state.title}</h5>
          <p>{this.state.body}</p>
          <div>
            <button
              className={this.state.isRead ? 'btn btn-success mr-2' : 'btn btn-outline-success mr-2'}
              onClick={() => this.toggleRead()}
            >
              {this.state.isRead ? 'Read' : 'Unread'}
            </button>
            <button
              className="btn btn-primary mr-2"
              onClick={() => this.handleEdit()}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete()}
            >
              Delete
            </button>
            {this.props.hasSecret && (
              <div
                className="mt-2"
              >
                <button
                  className="btn btn-info"
                  onClick={() => alert('Congratulations, you found the easter egg!')}
                >
                  Click for a secret!
                </button>
              </div>
            )}
          </div>
        </React.Fragment>
      );
    }
    
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            {componentToRender}
          </div>
        </div>
      </div>
    );
  }
}

Note.defaultProps = {
  body: "A cool body",
  title: "A cool title",
  isRead: false,
};

Note.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string,
  isRead: PropTypes.bool,
};

export default Note;
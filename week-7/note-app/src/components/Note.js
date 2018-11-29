import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteNote(this.props.id);
  }

  render() {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card card-view">
          <div className="card-body">
            <h5>{this.props.title}</h5>
            <p>{this.props.body}</p>
            <div>
              <Link
                to={`/edit/${this.props.id}`}
                className="btn btn-outline-primary mr-2"
              >
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => this.handleDelete()}
              >
                Delete
              </button>
            </div>
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

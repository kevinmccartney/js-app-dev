import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  deleteNote,
  getNotes,
} from '../services/api';
import { notesReceived } from '../services/redux/actionCreators';

const Note = props => {
  const handleDelete = async (id) => {
    await deleteNote(id);

    const notes = await getNotes();

    props.dispatch(notesReceived(notes));
  }

  return (
    <div
      className="col-sm-12 col-md-6 col-lg-4"
    >
      <div
        className="card card-view"
      >
        <div
          className="card-body"
        >
          <h5>{props.title}</h5>
          <p>{props.body}</p>
          <div>
            <Link
              className="btn btn-outline-primary mr-2"
              to={`/edit/${props.id}`}
            >
              Edit
            </Link>
            <button
              className="btn btn-danger"
              onClick={async () => await handleDelete(props.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect()(Note);

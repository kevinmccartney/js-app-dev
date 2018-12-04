import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteNote } from '../services/redux/actionCreators';

const Note = props => (
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
            onClick={() => props.dispatch(deleteNote(props.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default connect()(Note);

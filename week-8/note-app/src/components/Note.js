import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/Note.css';

// Note has no state, so it is a functional component
const Note = props => (
  <div className="col-sm-12 col-md-6 col-lg-4">
    <div className="card card-view">
      <div className="card-body">
        <h5>{props.title}</h5>
        <p>{props.body}</p>
        <div>
          <Link
            // here we are linking to an edit page with an id parameter
            to={`/edit/${props.id}`}
            className="btn btn-outline-primary mr-2"
          >
            Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteNote(parseInt(props.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Note;

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

import { getNotes } from '../services/api';
import { notesReceived } from '../services/redux/actionCreators'
import Note from './Note';

class Board extends Component {
  constructor(props) {
    super(props);

    this.renderNoNotes = this.renderNoNotes.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  async componentDidMount() {
    const notes = await getNotes();

    console.log(notes);
    this.props.dispatch(notesReceived(notes));
  }

  renderNoNotes() {
    return (
      <div
        className="d-flex d-flex-column justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
        }}
      >
        <div class="jumbotron">
          <h1 class="display-4">You don't have any notes yet!</h1>
          <p class="lead">Why don't you add a few?</p>
          <Link
            class="btn btn-primary btn-lg"
            to="/add"
          >
            Add a Note
          </Link>
        </div>
      </div>
    )
  }

  renderNotes() {
    return (
      <div
        className="container my-5"
      >
        {map(this.props.notes, note => (
          <Note
            key={note.id}
            id={note.id}
            body={note.body}
            title={note.title}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="board">
        {this.props.notes.length <= 0 && this.renderNoNotes()}
        {this.props.notes.length > 0 && this.renderNotes()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
}

export default connect(mapStateToProps)(Board);

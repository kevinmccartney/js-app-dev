import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addNote } from '../services/redux/actionCreators';
import {
  login,
  submitNote,
} from '../services/api';

class Login extends React.Component {

  handleLogin = async () => {
    await login()

    this.props.history.push('/');
  }

  render() {
    return (
      <div
        className="container my-5"
        style={{
          maxWidth: '750px',
        }}
      >
        <h1>Login</h1>
        <hr />
        <button
          className="btn btn-primary mt-3"
          onClick={() => this.handleLogin()}
        >
          Submit
        </button>
      </div>
    )
  }
}

export default connect()(Login);

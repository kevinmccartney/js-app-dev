import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../services/api';

class Logout extends React.Component {

  handleLogout = async () => {
    await logout()

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
        <h1>Logout</h1>
        <hr />
        <button
          className="btn btn-primary mt-3"
          onClick={() => this.handleLogout()}
        >
          Submit
        </button>
      </div>
    )
  }
}

export default connect()(Logout);

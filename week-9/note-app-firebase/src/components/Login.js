import React from 'react';
import { connect } from 'react-redux';

import { login } from '../services/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.updateField = this.updateField.bind(this);
  }

  updateField(value, field) {
    const newState = Object.assign({}, this.state);
  
    newState[field] = value;
  
    this.setState(newState);
  }

  handleLogin = async () => {
    await login();

    this.props.history.push('/');
  }

  render() {
    return (
      <div
        className="container d-flex flex-column align-items-center my-5"
        style={{
          maxWidth: '750px',
        }}
      >
        <h1>Login</h1>
        <div
          className="d-flex flex-column align-items-start w-100"
        >
          <form
            className="w-100"
          >
            <div
              className="form-group"
            >
              <label
                for="loginInputEmail"
              >
                Email<i className="text-danger">*</i>
              </label>
              <input
                type="text"
                className="form-control"
                id="loginInputEmail"
                placeholder="Email"
                onChange={e => this.updateField(e.target.value, 'email')}
                value={this.state.username}
              />
            </div>
            <div
              className="form-group"
            >
              <label
                for="loginPassword"
              >
                Password<i className="text-danger">*</i>
              </label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                placeholder="password"
                onChange={e => this.updateField(e.target.value, 'password')}
                value={this.state.password}
              />
            </div>
          </form>
          <button
            className="btn btn-primary mt-3"
            onClick={() => this.handleLogin()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default connect()(Login);

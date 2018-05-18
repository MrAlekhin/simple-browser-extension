import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="row">
        <h4>Sign in</h4>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>

          <div className="row">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

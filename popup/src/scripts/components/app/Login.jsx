import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { login } from '../../actions/index';

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: ''
    };

    this.muVar;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: null, isLoading: true });
    this.myVar = setTimeout(() => {
      this.props.login(this.state).then(() => {
        this.setState({ isLoading: false });
        if (!this.props.isLogin) {
          this.setState({
            error:
              'Sorry there is no such account. Check username and password are correct.'
          });
        }
      });
    }, 3000);
  }

  handUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  renderRedirect() {
    if (this.props.isLogin) {
      return <Redirect to="/" />;
    }
  }

  renderLoading() {
    if (this.state.isLoading) {
      return (
        <div className="row">
          <div className="progress">
            <div className="indeterminate" />
          </div>
          <button
            style={{ position: 'fixed', bottom: '10px', right: '10px' }}
            className="btn waves-effect waves-light"
            onClick={() => {
              this.myVar = clearTimeout(this.myVar);
            }}
          >
            Cancel
          </button>
        </div>
      );
    }
  }

  renderError() {
    if (this.state.error) {
      return <p>{this.state.error.toString()}</p>;
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="row">
        {this.renderRedirect()}
        <h4>Sign in</h4>
        <form onSubmit={this.handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={this.handUsernameChange.bind(this)}
                id="email"
                type="text"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={this.handPasswordChange.bind(this)}
                id="password"
                type="password"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <button
              className="btn waves-effect waves-light"
              disabled={isLoading}
              type="submit"
            >
              Login
            </button>
          </div>
          {this.renderError()}
          {this.renderLoading()}
        </form>
      </div>
    );
  }
}

function mapStateToProps({ login }) {
  return { isLogin: login.isLogin };
}

export default connect(mapStateToProps, { login })(withRouter(Login));

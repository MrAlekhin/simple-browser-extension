import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import * as action from '../../actions';

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true });

    this.props.login(this.state).then(res => {
      this.setState({ isLoading: false });
    });
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

  render() {
    const { isLoading } = this.state;
    return (
      <div className="row">
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
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(
    {
      login: action.login
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Login);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';
import { connect } from 'react-redux';
import { logout } from '../actions/index';

class LogoutButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Link to="/login" onClick={() => this.props.logout()}>
          <Button waves="light">Logout</Button>
        </Link>
      </div>
    );
  }
}

export default connect(null, { logout })(LogoutButton);

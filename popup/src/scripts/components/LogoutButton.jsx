import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <Link to="/login">
          <Button waves="light">Logout</Button>
        </Link>
      </div>
    );
  }
}

export default LogoutButton;

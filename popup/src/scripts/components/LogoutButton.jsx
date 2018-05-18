import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <Button waves="light" node={Link} to="/login">
          Logout
        </Button>
      </div>
    );
  }
}

export default LogoutButton;

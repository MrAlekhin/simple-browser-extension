import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <p>
          Sorry, there is no such account. Check the passsword and username{' '}
        </p>
        <Link to="/login">ok</Link>
      </div>
    );
  }
}

export default ErrorPage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Loading extends Component {
  render() {
    return (
      <div>
        <h4>Loading ...</h4>
        <Link to="/login">Cancel</Link>
      </div>
    );
  }
}

export default Loading;

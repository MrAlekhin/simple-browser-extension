import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CountryCard from '../CountryCard';
import LogoutButton from '../LogoutButton';

class Main extends Component {
  render() {
    return (
      <div>
        <h3>Welocome</h3>
        <CountryCard />
        <LogoutButton />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default Main;

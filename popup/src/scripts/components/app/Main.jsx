import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CountryCard from '../CountryCard';
import LogoutButton from '../LogoutButton';

class Main extends Component {
  getCountry() {
    if (this.props.selectedCountry === -1) {
      return { name: 'Automaticaly' };
    } else {
      return this.props.countries[this.props.selectedCountry];
    }
  }

  render() {
    return (
      <div>
        <h3>Welocome</h3>
        <CountryCard selectedCountry={this.getCountry()} />
        <LogoutButton />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

function mapStateToProps({ login }) {
  return {
    countries: login.countries,
    selectedCountry: login.selectedCountry
  };
}

export default connect(mapStateToProps)(Main);

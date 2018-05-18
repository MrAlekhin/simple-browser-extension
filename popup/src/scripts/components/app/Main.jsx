import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

export default Main;

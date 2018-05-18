import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

class Header extends Component {
  componentDidMount() {}
  render() {
    return (
      <Navbar className="grey darken-2" brand="Simple Extension" right>
        <NavItem onClick={() => <Link to="/" />}>Help</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Settings</NavItem>
        <NavItem>Advanced</NavItem>
      </Navbar>
    );
  }
}

export default Header;

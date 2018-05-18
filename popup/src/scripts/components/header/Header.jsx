import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, NavItem} from 'react-materialize';


class Sidemenu extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Navbar brand='Simple Extention' right>
        <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>

    );
  }
}

export default Sidemenu;

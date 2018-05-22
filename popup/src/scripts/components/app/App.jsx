import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../actions/index';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styles from './style/index.css';

//used for materialize design only
import $ from 'jquery';
import 'materialize-css';

//Components
import Header from '../Header';
import Countries from './Countries';
import Login from './Login';
import Main from './Main';

class App extends Component {
  //checked result from session (if no account "false", redirects to login page)
  checkLogin() {
    console.log(this.props.auth);
    if (!this.props.auth) {
      return <Redirect to="/login" />;
    }
  }
  render() {
    return (
      <Router basename="/popup.html">
        <div className={styles.container}>
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/countries" component={Countries} />
          {this.checkLogin()}
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.login.isLogin };
}

export default connect(mapStateToProps)(App);

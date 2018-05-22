import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../actions';
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
import ErrorPage from './ErrorPage';
import Loading from './Loading';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  //checked result from session (if no account "false", redirects to login page)
  checkLogin() {
    console.log(this.props.auth);
    if (!this.props.auth) {
      <Redirect to="/login" />;
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
          <Route path="/error" component={ErrorPage} />
          <Route path="/loading" component={Loading} />
          {this.checkLogin()}
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  console.log(state.auth);
  return { auth: state.auth };
}

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(
    {
      fetchUser: action.fetchUser
    },
    dispatch
  );
};

export default connect(mapStateToProps, action)(App);

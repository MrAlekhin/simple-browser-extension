import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './style/index.css';
import $ from 'jquery';
import 'materialize-css';
import * as actions from '../../actions';

import Header from '../Header';

import Countries from './Countries';
import Login from './Login';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Router basename="/popup.html">
        <Switch>
          <div className={styles.container}>
            <Header />
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/countries" component={Countries} />
          </div>
        </Switch>
      </Router>
    );
  }
}

//export default connect(mapStateToProps)(App);
export default App;

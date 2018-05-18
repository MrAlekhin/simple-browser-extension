import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './style/index.css';
import $ from "jquery";
import 'materialize-css';

import Header from '../header/Header';
import Countries from './Countries';
import Login from './Login';
import Main from './Main';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  //componentDidMount() {
    // document.addEventListener('click', () => {
    //   this.props.dispatch({
    //     type: 'ADD_COUNT'
    //   });
    // });
  //}

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <div className="container">
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route path="/countries" component={Countries} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.count
//   };
// };

//export default connect(mapStateToProps)(App);
export default App;

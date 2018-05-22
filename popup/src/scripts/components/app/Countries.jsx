import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCountry } from '../../actions/index';
import _ from 'lodash';
import {
  Breadcrumb,
  MenuItem,
  Collection,
  CollectionItem,
  Button
} from 'react-materialize';

class Countries extends Component {
  //renders the list of countries
  renderCountries() {
    return _.map(this.props.countries, ({ name }, index) => {
      if (index === this.props.selectedCountry) {
        return (
          <CollectionItem key={index} active>
            {name}
          </CollectionItem>
        );
      }
      return (
        <CollectionItem
          key={index}
          onClick={() => {
            this.props.selectCountry(index);
          }}
        >
          {name}
        </CollectionItem>
      );
    });
  }

  render() {
    return (
      <div>
        <Breadcrumb className="grey darken-2">
          <MenuItem className="grey darken-2">
            <Link to="/">Main</Link>
          </MenuItem>
          <MenuItem>Countries</MenuItem>
        </Breadcrumb>

        <Collection style={{ margin: 0 }}>{this.renderCountries()}</Collection>
      </div>
    );
  }
}

function mapStateToProps({ login }, state) {
  return {
    countries: login.countries,
    selectedCountry: login.selectedCountry
  };
}

export default connect(mapStateToProps, { selectCountry })(Countries);

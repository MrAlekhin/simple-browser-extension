import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  MenuItem,
  Collection,
  CollectionItem,
  Button
} from 'react-materialize';

class Countries extends Component {
  render() {
    return (
      <div>
        <Breadcrumb className="grey darken-2">
          <MenuItem className="grey darken-2">
            <Link to="/">Main</Link>
          </MenuItem>
          <MenuItem>Countries</MenuItem>
        </Breadcrumb>

        <Collection style={{ margin: 0 }}>
          <CollectionItem href="#">Canada</CollectionItem>
          <CollectionItem href="#" active>
            United States
          </CollectionItem>
          <CollectionItem href="#">Mexico</CollectionItem>
          <CollectionItem href="#">United Kingdom</CollectionItem>
          <CollectionItem href="#">France</CollectionItem>
        </Collection>
        <Button
          floating
          large
          className="grey darken-2"
          waves="light"
          icon="save"
          style={{ position: 'fixed', bottom: '10px', right: '10px' }}
        />
      </div>
    );
  }
}

export default Countries;

import React, { Component } from 'react';
import { Col, Row, Card } from 'react-materialize';
import { Link } from 'react-router-dom';

class CountryCard extends Component {
  render() {
    return (
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-image">
            <img src="https://lorempixel.com/100/190/nature/6" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>
                <b>Selected Country:</b>
              </p>
              <p>{this.props.selectedCountry.name}</p>
            </div>
            <div className="card-action">
              <Link to="/countries">Change country</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryCard;

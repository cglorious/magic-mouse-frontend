import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCritterCountry } from '../actions/loadAttractionsForLand'
import { incrementCritterCountry, decrementCritterCountry } from '../actions/countAttractionsForLand'
import CritterCountryAttraction from '../components/CritterCountryAttraction';

class CritterCountryContainer extends Component {

  componentDidMount() {
    this.props.fetchCritterCountry()
  }

  render() {
    const listCritterCountryAttractions = () => {
        return this.props.attractions.map(attraction =>
          <CritterCountryAttraction
            key={attraction.id}
            id={attraction.id}
            attractions={this.props.attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementCritterCountry={this.props.incrementCritterCountry}
            decrementCritterCountry={this.props.decrementCritterCountry}
            />
        )
      }

    return (
      <div>
        <div className="page-container">
          <h3 className="header">Critter Country</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listCritterCountryAttractions()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.critterCountry.list})

export default connect(mapStateToProps, {
  fetchCritterCountry,
  incrementCritterCountry,
  decrementCritterCountry
})(CritterCountryContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCritterCountry } from '../actions/loadAttractionsForLand'
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
            image={attraction.image_url}
            name={attraction.name}
            log={attraction.log}
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

export default connect(mapStateToProps, { fetchCritterCountry })(CritterCountryContainer);

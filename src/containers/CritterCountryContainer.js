import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCritterCountry } from '../actions/loadAttractionsForLand'
import { incrementCritterCountry, decrementCritterCountry } from '../actions/countAttractionsForLand'
import CritterCountry from '../components/CritterCountry';

class CritterCountryContainer extends Component {

  componentDidMount() {
    this.props.fetchCritterCountry()
  }

  render() {
    return (
      <div>
        <CritterCountry
          attractions={this.props.attractions}
          incrementCritterCountry={this.props.incrementCritterCountry}
          decrementCritterCountry={this.props.decrementCritterCountry} 
          />
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

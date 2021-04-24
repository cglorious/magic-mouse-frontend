import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCritterCountry } from '../actions/loadAttractionsForLand'
import CritterCountry from '../components/CritterCountry';

class CritterCountryContainer extends Component {

  componentDidMount() {
    this.props.fetchCritterCountry()
  }

  render() {
    return (
      <div>
        <CritterCountry />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.critterCountry.list})

export default connect(mapStateToProps, { fetchCritterCountry })(CritterCountryContainer);

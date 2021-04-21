import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCritterCountry } from '../actions/loadAttractionsForLand'
// import Fantasyland from '../components/Fantasyland';

class CritterCountryContainer extends Component {

  componentDidMount() {
    this.props.fetchCritterCountry()
  }

  render() {
    return (
      <div>
        CritterCountryContainer
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.critterCountry.list})

export default connect(mapStateToProps, { fetchCritterCountry })(CritterCountryContainer);

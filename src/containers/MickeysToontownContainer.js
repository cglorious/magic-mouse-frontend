import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMickeysToonTown } from '../actions/loadAttractionsForLand'
import { incrementMickeysToontown, decrementMickeysToontown } from '../actions/countAttractionsForLand'
import MickeysToontown from '../components/MickeysToontown';

class MickeysToontownContainer extends Component {

  componentDidMount() {
    this.props.fetchMickeysToonTown()
  }

  render() {
    return (
      <div>
        <MickeysToontown />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.mickeysToontown.list})

export default connect(mapStateToProps, {
  fetchMickeysToonTown,
  incrementMickeysToontown,
  decrementMickeysToontown 
})(MickeysToontownContainer);

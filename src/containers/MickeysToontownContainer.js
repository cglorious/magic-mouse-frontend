import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMickeysToonTown } from '../actions/loadAttractionsForLand'
// import Fantasyland from '../components/Fantasyland';

class MickeysToontownContainer extends Component {

  componentDidMount() {
    this.props.fetchMickeysToonTown()
  }

  render() {
    return (
      <div>
        MickeysToontownContainer
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.mickeysToontown.list})

export default connect(mapStateToProps, { fetchMickeysToonTown })(MickeysToontownContainer);

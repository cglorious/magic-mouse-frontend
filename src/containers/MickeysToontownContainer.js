import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMickeysToonTown } from '../actions/loadAttractionsForLand'
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

export default connect(mapStateToProps, { fetchMickeysToonTown })(MickeysToontownContainer);

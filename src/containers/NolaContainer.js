import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNola } from '../actions/loadAttractionsForLand'
import { incrementNola, decrementNola } from '../actions/countAttractionsForLand'
import Nola from '../components/Nola';

class NolaContainer extends Component {

  componentDidMount() {
    this.props.fetchNola()
  }

  render() {
    return (
      <div>
        <Nola />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.nola.list})

export default connect(mapStateToProps, {
  fetchNola,
  incrementNola,
  decrementNola  
})(NolaContainer);

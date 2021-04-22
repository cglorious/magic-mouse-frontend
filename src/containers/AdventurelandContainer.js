import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdventureland } from '../actions/loadAttractionsForLand'
// import Fantasyland from '../components/Fantasyland';

class AdventurelandContainer extends Component {

  componentDidMount() {
    this.props.fetchAdventureland()
  }

  render() {
    return (
      <div>
        Adventureland
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.adventureland.list})

export default connect(mapStateToProps, { fetchAdventureland })(AdventurelandContainer);

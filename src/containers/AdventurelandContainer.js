import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdventureland } from '../actions/loadAttractionsForLand'
import { incrementAdventureland, decrementAdventureland } from '../actions/countAttractionsForLand'
import Adventureland from '../components/Adventureland';

class AdventurelandContainer extends Component {

  componentDidMount() {
    this.props.fetchAdventureland()
  }

  render() {
    return (
      <div>
        <Adventureland
          attractions={this.props.attractions}
          incrementAdventureland={this.props.incrementAdventureland}
          decrementAdventureland={this.props.decrementAdventureland} 
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.adventureland.list})

export default connect(mapStateToProps, {
  fetchAdventureland,
  incrementAdventureland,
  decrementAdventureland
})(AdventurelandContainer);

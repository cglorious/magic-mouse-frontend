import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTomorrowland } from '../actions/loadAttractionsForLand'
import { incrementTomorrowland, decrementTomorrowland } from '../actions/countAttractionsForLand'
import Tomorrowland from '../components/Tomorrowland';

class TomorrowlandContainer extends Component {

  componentDidMount() {
    this.props.fetchTomorrowland()
  }

  render() {
    return (
      <div>
        <Tomorrowland />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.tomorrowland.list})

export default connect(mapStateToProps, {
  fetchTomorrowland,
  incrementTomorrowland,
  decrementTomorrowland 
})(TomorrowlandContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTomorrowland } from '../actions/loadAttractionsForLand'
// import Fantasyland from '../components/Fantasyland';

class TomorrowlandContainer extends Component {

  componentDidMount() {
    this.props.fetchTomorrowland()
  }

  render() {
    return (
      <div>
        TomorrowlandContainer
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.tomorrowland.list})

export default connect(mapStateToProps, { fetchTomorrowland })(TomorrowlandContainer);

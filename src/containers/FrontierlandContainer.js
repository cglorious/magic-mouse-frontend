import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFrontierland } from '../actions/loadAttractionsForLand'
// import Fantasyland from '../components/Fantasyland';

class FrontierlandContainer extends Component {

  componentDidMount() {
    this.props.fetchFrontierland()
  }

  render() {
    return (
      <div>
        FrontierlandContainer
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.frontierland.list})

export default connect(mapStateToProps, { fetchFrontierland })(FrontierlandContainer);

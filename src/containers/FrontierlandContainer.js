import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFrontierland } from '../actions/loadAttractionsForLand'
import Frontierland from '../components/Frontierland';

class FrontierlandContainer extends Component {

  componentDidMount() {
    this.props.fetchFrontierland()
  }

  render() {
    return (
      <div>
        <Frontierland />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.frontierland.list})

export default connect(mapStateToProps, { fetchFrontierland })(FrontierlandContainer);

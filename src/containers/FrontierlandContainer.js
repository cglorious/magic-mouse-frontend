import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFrontierland } from '../actions/loadAttractionsForLand'
import { incrementFrontierland, decrementFrontierland } from '../actions/countAttractionsForLand'
import Frontierland from '../components/Frontierland';

class FrontierlandContainer extends Component {

  componentDidMount() {
    this.props.fetchFrontierland()
  }

  render() {
    return (
      <div>
        <Frontierland
          attractions={this.props.attractions}
          incrementFrontierland={this.props.incrementFrontierland}
          decrementFrontierland={this.props.decrementFrontierland} 
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.frontierland.list})

export default connect(mapStateToProps, {
  fetchFrontierland,
  incrementFrontierland,
  decrementFrontierland
})(FrontierlandContainer);

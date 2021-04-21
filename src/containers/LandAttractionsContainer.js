import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAttractionsForLand } from '../actions/loadAttractionsForLand'
import LandAttractions from '../components/LandAttractions';

class LandAttractionsContainer extends Component {

  componentDidMount() {
    this.props.loadAttractionsForLand()
  }

  render() {
    return (
      <div className="App">
        <LandAttractions
          landAttractions={this.props.landAttractions}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({landAttractions: state.landAttractions.list})

export default connect(mapStateToProps, { loadAttractionsForLand })(LandAttractionsContainer);

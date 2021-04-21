import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLands } from '../actions/fetchLands'
import { loadAttractionsForLand } from '../actions/loadAttractionsForLand'
import LandAttractions from '../components/LandAttractions';

class LandAttractionsContainer extends Component {

  componentDidMount() {
    this.props.fetchLands()
  }

  render() {
    return (
      <div className="App">
        <LandAttractions
          landAttractions={this.props.landAttractions}
          loadAttractionsForLand={loadAttractionsForLand}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({landAttractions: state.landAttractions.list})

export default connect(mapStateToProps, { fetchLands, loadAttractionsForLand })(LandAttractionsContainer);

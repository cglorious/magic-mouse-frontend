import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLands } from '../actions/fetchLands'
// import { fetchStarWars } from '../actions/loadAttractionsForLand'
import Lands from '../components/Lands';

class LandsContainer extends Component {

  componentDidMount() {
    this.props.fetchLands()
    // this.props.fetchStarWars()
  }

  render() {
    return (
      <div className="App">
        <Lands
          lands={this.props.lands}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({lands: state.lands.list})

export default connect(mapStateToProps, { fetchLands
  // , fetchStarWars
})(LandsContainer);

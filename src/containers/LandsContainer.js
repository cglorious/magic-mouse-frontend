import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLands } from '../actions/fetchLands'
import Lands from '../components/Lands';
// import {findAttractions} from from '../actions/findAttractions'

class LandsContainer extends Component {

  componentDidMount() {
    this.props.fetchLands()
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

// findAttractions = {findAttractions}
// attractions: state.lands.attractions
// {findAttractions}

export default connect(mapStateToProps, { fetchLands })(LandsContainer);

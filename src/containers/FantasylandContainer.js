import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFantasyland } from '../actions/loadAttractionsForLand'
import { incrementFantasyland, decrementFantasyland } from '../actions/countAttractionsForLand'
import Fantasyland from '../components/Fantasyland';

class FantasylandContainer extends Component {

  componentDidMount() {
    this.props.fetchFantasyland()
  }

  render() {
    return (
      <div className="App">
        <Fantasyland
          attractions={this.props.attractions}
          incrementFantasyland={this.props.incrementFantasyland}
          decrementFantasyland={this.props.decrementFantasyland}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.fantasyland.list})

export default connect(mapStateToProps, {
  fetchFantasyland,
  incrementFantasyland,
  decrementFantasyland
})(FantasylandContainer);

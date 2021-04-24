import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFantasyland } from '../actions/loadAttractionsForLand'
import { incrementFantasyland, decrementFantasyland } from '../actions/count'
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
          increment={this.props.incrementFantasyland}
          decrement={this.props.decrementFantasyland}
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

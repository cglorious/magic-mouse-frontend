import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFantasyland } from '../actions/loadAttractionsForLand'
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
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.fantasyland.list})

export default connect(mapStateToProps, { fetchFantasyland })(FantasylandContainer);

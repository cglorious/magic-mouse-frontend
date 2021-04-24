import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMainstreet } from '../actions/loadAttractionsForLand'
// import Fantasyland from '../components/Fantasyland';

class MainstreetContainer extends Component {

  componentDidMount() {
    this.props.fetchMainstreet()
  }

  render() {
    return (
      <div>
        MainstreetContainer
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.mainstreet.list})

export default connect(mapStateToProps, { fetchMainstreet })(MainstreetContainer);

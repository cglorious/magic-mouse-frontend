import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMainstreet } from '../actions/loadAttractionsForLand'
import Mainstreet from '../components/Mainstreet';

class MainstreetContainer extends Component {

  componentDidMount() {
    this.props.fetchMainstreet()
  }

  render() {
    return (
      <div>
        <Mainstreet />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.mainstreet.list})

export default connect(mapStateToProps, { fetchMainstreet })(MainstreetContainer);

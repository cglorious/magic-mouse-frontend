import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMainstreetUSA } from '../actions/loadAttractionsForLand'
// import Fantasyland from '../components/Fantasyland';

class MainstreetUSAContainer extends Component {

  componentDidMount() {
    this.props.fetchMainstreetUSA()
  }

  render() {
    return (
      <div>
        MainstreetUSAContainer
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.mainstreetUSA.list})

export default connect(mapStateToProps, { fetchMainstreetUSA })(MainstreetUSAContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNola } from '../actions/loadAttractionsForLand'
// import Fantasyland from '../components/Fantasyland';

class NolaContainer extends Component {

  componentDidMount() {
    this.props.fetchNola()
  }

  render() {
    return (
      <div>
        NolaContainer
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.nola.list})

export default connect(mapStateToProps, { fetchNola })(NolaContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResorts } from '../actions/fetchResorts'
import { findParks } from '../actions/findParks'
import Resorts from '../components/Resorts';

class ResortsContainer extends Component {

  componentDidMount() {
    this.props.fetchResorts()
  }

  render() {
    return (
      <div className="App">
        <Resorts resorts={this.props.resorts} findParks={findParks}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({resorts: state.resorts.list})

export default connect(mapStateToProps, { fetchResorts, findParks })(ResortsContainer);

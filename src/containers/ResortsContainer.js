import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResorts } from '../actions/fetchResorts'
import Resorts from '../components/resorts/Resorts';

class ResortsContainer extends Component {

  componentDidMount() {
    this.props.fetchResorts()
  }

  render() {
    return (
      <div className="App">
        <Resorts resorts={this.props.resorts}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({resorts: state.resorts.list})

export default connect(mapStateToProps, { fetchResorts })(ResortsContainer);

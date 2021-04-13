import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResorts } from '../actions/fetchResorts'
import Resorts from '../pages/resorts/resorts';

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

const mapStateToProps = state => ({resorts: state.resorts})

export default connect(mapStateToProps, { fetchResorts })(ResortsContainer);

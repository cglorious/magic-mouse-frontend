import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countAttractions } from '../actions/countAttractions'
// import Lands from '../components/Lands';

class CounterContainer extends Component {

  componentDidMount() {
    this.props.countAttractions()
  }

  render() {
    return (
      <div>
        CounterContainer
      </div>
    );
  }
}

const mapStateToProps = state => ({counter: state.counter.count})

export default connect(mapStateToProps, { countAttractions })(CounterContainer);

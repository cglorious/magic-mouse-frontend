import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/count'
import Counter from '../components/Counter'

class CounterContainer extends Component {

  render() {
    return (
      <div>
        <Counter counter={this.props.counter} increment={this.props.increment} decrement={this.props.decrement}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({counter: state.counter.count})

export default connect(mapStateToProps, { increment, decrement })(CounterContainer);

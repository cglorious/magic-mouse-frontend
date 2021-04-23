import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/count'
import Counter from '../components/Counter'

class CounterContainer extends Component {

  render() {
    return (
      <div>
        <Counter
          counters={this.props.counters}
          increment={this.props.increment}
          decrement={this.props.decrement}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({counters: state.counters})

export default connect(mapStateToProps, { increment, decrement })(CounterContainer);

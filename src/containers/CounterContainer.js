import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/count'
// import Counter from '../components/Counter'

class CounterContainer extends Component {

  renderCounters() {
    return this.props.counters.map((value, i) => {
      return (
        <div>
          <h1>{value}</h1>
          <p>
            <button className="btn btn-primary" onClick={ () => this.props.increment(i)}>+</button>
            <button className="btn btn-primary" onClick={ () => this.props.decrement(i)}>-</button>
          </p>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderCounters()}
      </div>
    );
  }
}

const mapStateToProps = state => ({counters: state.counters})

export default connect(mapStateToProps, { increment, decrement })(CounterContainer);

// <Counter
//   id={this.props.id}
//   counter={this.props.counters}
//   increment={this.props.increment}
//   decrement={this.props.decrement}
// />

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStarWars } from '../actions/loadAttractionsForLand'
import StarWars from '../components/StarWars';
import { increment, decrement } from '../actions/count'

class StarWarsContainer extends Component {

  componentDidMount() {
    this.props.fetchStarWars()
  }

  render() {
    return (
      <div className="App">
        <StarWars
          attractions={this.props.attractions}
          counter={this.props.counter}
          increment= {this.props.increment}
          decrement= {this.props.decrement}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  attractions: state.starWars.list,
  counter: state.starWars.count
})

export default connect(mapStateToProps, {
  fetchStarWars,
  increment,
  decrement
})(StarWarsContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStarWars } from '../actions/loadAttractionsForLand'
import { increment, decrement } from '../actions/count'
import StarWars from '../components/StarWars';

class StarWarsContainer extends Component {

  componentDidMount() {
    this.props.fetchStarWars()
  }

  render() {
    return (
      <div>
        <StarWars
          attractions={this.props.attractions}
          increment= {this.props.increment}
          decrement= {this.props.decrement}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  attractions: state.starWars.list
})

export default connect(mapStateToProps, {
  fetchStarWars,
  increment,
  decrement
})(StarWarsContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStarWars } from '../actions/loadAttractionsForLand'
import { incrementStarWars, decrementStarWars } from '../actions/countAttractionsForLand'
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
          incrementStarWars={this.props.incrementStarWars}
          decrementStarWars={this.props.decrementStarWars}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.starWars.list})

export default connect(mapStateToProps, {
  fetchStarWars,
  incrementStarWars,
  decrementStarWars
})(StarWarsContainer);

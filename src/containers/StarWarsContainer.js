import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementStarWars, decrementStarWars } from '../actions/countAttractionsForLand'
import StarWars from '../components/StarWars';

class StarWarsContainer extends Component {

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
  incrementStarWars,
  decrementStarWars
})(StarWarsContainer);

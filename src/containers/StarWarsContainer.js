import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStarWars } from '../actions/loadAttractionsForLand'
import StarWars from '../components/StarWars';

class StarWarsContainer extends Component {

  componentDidMount() {
    this.props.fetchStarWars()
  }

  render() {
    return (
      <div className="App">
        <StarWars
          attractions={this.props.attractions}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.starWars.list})

export default connect(mapStateToProps, { fetchStarWars })(StarWarsContainer);

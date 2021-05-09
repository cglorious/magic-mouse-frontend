import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStarWars } from '../actions/loadAttractionsForLand'
import { incrementStarWars, decrementStarWars } from '../actions/countAttractionsForLand'
import StarWarsAttraction from '../components/StarWarsAttraction';
import { Link } from 'react-router-dom'

class StarWarsContainer extends Component {

  componentDidMount() {
    this.props.fetchStarWars()
  }


  render() {
    const listStarWarsAttractions = () => {
        return this.props.attractions.map(attraction =>
            <StarWarsAttraction
              key={attraction.id}
              id={attraction.id}
              attractions={this.props.attractions}
              attraction={attraction}
              image={attraction.image_url}
              name={attraction.name}
              count={attraction.count}
              incrementStarWars={this.props.incrementStarWars}
              decrementStarWars={this.props.decrementStarWars}
              />
        )
      }

    return (
      <div>
        <div className="page-container">
          <h3 className="header">Star Wars</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listStarWarsAttractions()}
          </div>
          <div className="center-btn">
            <Link to='/add-attraction' className="btn btn-primary btn-lg px-4 me-sm-3">Add Attraction</Link>
          </div>
        </div>
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

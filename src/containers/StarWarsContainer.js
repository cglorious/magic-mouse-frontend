import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStarWars } from '../actions/loadAttractionsForLand'
import StarWarsAttraction from '../components/StarWarsAttraction';

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
              attraction={attraction}
              image={attraction.image_url}
              name={attraction.name}
              count={attraction.count}
              log={attraction.log}
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.starWars.list})

export default connect(mapStateToProps, {
  fetchStarWars
})(StarWarsContainer);

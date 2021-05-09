import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFrontierland } from '../actions/loadAttractionsForLand'
import { incrementFrontierland, decrementFrontierland } from '../actions/countAttractionsForLand'
import FrontierlandAttraction from '../components/FrontierlandAttraction';
import { Link } from 'react-router-dom'

class FrontierlandContainer extends Component {

  componentDidMount() {
    this.props.fetchFrontierland()
  }

  render() {
    const listFrontierlandAttractions = () => {
        return this.props.attractions.map(attraction =>
          <FrontierlandAttraction
            key={attraction.id}
            id={attraction.id}
            attractions={this.props.attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementFrontierland={this.props.incrementFrontierland}
            decrementFrontierland={this.props.decrementFrontierland}
            />
        )
      }
    return (
      <div>
        <div className="page-container">
          <h3 className="header">Frontierland</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listFrontierlandAttractions()}
          </div>
        </div>
        <div className="center-btn">
          <Link to='/add-attraction' className="btn btn-primary btn-lg px-4 me-sm-3">Add Attraction</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.frontierland.list})

export default connect(mapStateToProps, {
  fetchFrontierland,
  incrementFrontierland,
  decrementFrontierland
})(FrontierlandContainer);

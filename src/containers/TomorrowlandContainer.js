import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTomorrowland } from '../actions/loadAttractionsForLand'
import { incrementTomorrowland, decrementTomorrowland } from '../actions/countAttractionsForLand'
import TomorrowlandAttraction from '../components/TomorrowlandAttraction';
import { Link } from 'react-router-dom'

class TomorrowlandContainer extends Component {

  componentDidMount() {
    this.props.fetchTomorrowland()
  }

  render() {
    const listTomorrowlandAttractions = () => {
        return this.props.attractions.map(attraction =>
          <TomorrowlandAttraction
            key={attraction.id}
            id={attraction.id}
            attractions={this.props.attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementTomorrowland={this.props.incrementTomorrowland}
            decrementTomorrowland={this.props.decrementTomorrowland}
            />
        )
      }

    return (
      <div>
        <div className="page-container">
          <h3 className="header">Tomorrowland</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listTomorrowlandAttractions()}
          </div>
          <div className="center-btn">
            <Link to='/add-attraction' className="btn btn-primary btn-lg px-4 me-sm-3">Add Attraction</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.tomorrowland.list})

export default connect(mapStateToProps, {
  fetchTomorrowland,
  incrementTomorrowland,
  decrementTomorrowland
})(TomorrowlandContainer);

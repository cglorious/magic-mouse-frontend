import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFantasyland } from '../actions/loadAttractionsForLand'
import { incrementFantasyland, decrementFantasyland } from '../actions/countAttractionsForLand'
import FantasylandAttraction from '../components/FantasylandAttraction';
import { Link } from 'react-router-dom'

class FantasylandContainer extends Component {

  componentDidMount() {
    this.props.fetchFantasyland()
  }

  render() {
    const listFantasylandAttractions = () => {
        return this.props.attractions.map(attraction =>
          <FantasylandAttraction
            key={attraction.id}
            id={attraction.id}
            attractions={this.props.attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementFantasyland={this.props.incrementFantasyland}
            decrementFantasyland={this.props.decrementFantasyland}
            />
        )
      }

    return (
      <div>
        <div className="page-container">
          <h3 className="header">Fantasyland</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listFantasylandAttractions()}
          </div>
        </div>
        <div className="center-btn">
          <Link to='/add-attraction' className="btn btn-primary btn-lg px-4 me-sm-3">Add Attraction</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.fantasyland.list})

export default connect(mapStateToProps, {
  fetchFantasyland,
  incrementFantasyland,
  decrementFantasyland
})(FantasylandContainer);

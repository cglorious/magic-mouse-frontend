import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdventureland } from '../actions/loadAttractionsForLand'
import { incrementAdventureland, decrementAdventureland } from '../actions/countAttractionsForLand'
import AdventurelandAttraction from '../components/AdventurelandAttraction';
import { Link } from 'react-router-dom'

class AdventurelandContainer extends Component {

  componentDidMount() {
    this.props.fetchAdventureland()
  }

  render() {
    const listAdventurelandAttractions = () => {
        return this.props.attractions.map(attraction =>
          <AdventurelandAttraction
            key={attraction.id}
            id={attraction.id}
            attractions={this.props.attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementAdventureland={this.props.incrementAdventureland}
            decrementAdventureland={this.props.decrementAdventureland}
            />
        )
      }

    return (
      <div>
        <div className="page-container">
          <h3 className="header">Adventureland</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listAdventurelandAttractions()}
          </div>
          <div className="center-btn">
            <Link to='/add-attraction' className="btn btn-primary btn-lg px-4 me-sm-3">Add Attraction</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.adventureland.list})

export default connect(mapStateToProps, {
  fetchAdventureland,
  incrementAdventureland,
  decrementAdventureland
})(AdventurelandContainer);

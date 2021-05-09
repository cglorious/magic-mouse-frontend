import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMainstreet } from '../actions/loadAttractionsForLand'
import { incrementMainstreet, decrementMainstreet } from '../actions/countAttractionsForLand'
import MainstreetAttraction from '../components/MainstreetAttraction';
import { Link } from 'react-router-dom'

class MainstreetContainer extends Component {

  componentDidMount() {
    this.props.fetchMainstreet()
  }

  render() {
    const listMainstreetAttractions = () => {
        return this.props.attractions.map(attraction =>
          <MainstreetAttraction
            key={attraction.id}
            id={attraction.id}
            attractions={this.props.attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementMainstreet={this.props.incrementMainstreet}
            decrementMainstreet={this.props.decrementMainstreet}
            />
        )
      }
    return (
      <div>
        <div className="page-container">
          <h3 className="header">Mainstreet, U.S.A.</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listMainstreetAttractions()}
          </div>
          <div className="center-btn">
            <Link to='/add-attraction' className="btn btn-primary btn-lg px-4 me-sm-3">Add Attraction</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.mainstreet.list})

export default connect(mapStateToProps, {
  fetchMainstreet,
  incrementMainstreet,
  decrementMainstreet
})(MainstreetContainer);

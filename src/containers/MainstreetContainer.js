import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMainstreet } from '../actions/loadAttractionsForLand'
import MainstreetAttraction from '../components/MainstreetAttraction';

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
            image={attraction.image_url}
            name={attraction.name}
            log={attraction.log}
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.mainstreet.list})

export default connect(mapStateToProps, { fetchMainstreet })(MainstreetContainer);

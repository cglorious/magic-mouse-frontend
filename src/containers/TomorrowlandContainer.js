import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTomorrowland } from '../actions/loadAttractionsForLand'
import TomorrowlandAttraction from '../components/TomorrowlandAttraction';

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
            image={attraction.image_url}
            name={attraction.name}
            log={attraction.log}
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.tomorrowland.list})

export default connect(mapStateToProps, {
  fetchTomorrowland
})(TomorrowlandContainer);

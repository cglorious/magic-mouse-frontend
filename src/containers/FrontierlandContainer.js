import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFrontierland } from '../actions/loadAttractionsForLand'
import FrontierlandAttraction from '../components/FrontierlandAttraction';

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
            image={attraction.image_url}
            name={attraction.name}
            log={attraction.log}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.frontierland.list})

export default connect(mapStateToProps, { fetchFrontierland })(FrontierlandContainer);

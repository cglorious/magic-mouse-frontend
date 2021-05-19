import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdventureland } from '../actions/loadAttractionsForLand'
import AdventurelandAttraction from '../components/AdventurelandAttraction';

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
            image={attraction.image_url}
            name={attraction.name}
            log={attraction.log}
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.adventureland.list})

export default connect(mapStateToProps, { fetchAdventureland })(AdventurelandContainer);

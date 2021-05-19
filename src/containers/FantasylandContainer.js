import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFantasyland } from '../actions/loadAttractionsForLand'
import FantasylandAttraction from '../components/FantasylandAttraction';

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
            image={attraction.image_url}
            name={attraction.name}
            log={attraction.log}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.fantasyland.list})

export default connect(mapStateToProps, { fetchFantasyland })(FantasylandContainer);

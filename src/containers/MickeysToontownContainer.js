import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMickeysToonTown } from '../actions/loadAttractionsForLand'
import MickeysToontownAttraction from '../components/MickeysToontownAttraction';

class MickeysToontownContainer extends Component {

  componentDidMount() {
    this.props.fetchMickeysToonTown()
  }

  render() {
    const listMickeysToontownAttractions = () => {
        return this.props.attractions.map(attraction =>
          <MickeysToontownAttraction
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
          <h3 className="header">Mickey's Toontown</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listMickeysToontownAttractions()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.mickeysToontown.list})

export default connect(mapStateToProps, { fetchMickeysToonTown })(MickeysToontownContainer);

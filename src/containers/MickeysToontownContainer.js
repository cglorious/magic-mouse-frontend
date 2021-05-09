import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMickeysToonTown } from '../actions/loadAttractionsForLand'
import { incrementMickeysToontown, decrementMickeysToontown } from '../actions/countAttractionsForLand'
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
            attractions={this.props.attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementMickeysToontown={this.props.incrementMickeysToontown}
            decrementMickeysToontown={this.props.decrementMickeysToontown}
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

export default connect(mapStateToProps, {
  fetchMickeysToonTown,
  incrementMickeysToontown,
  decrementMickeysToontown
})(MickeysToontownContainer);

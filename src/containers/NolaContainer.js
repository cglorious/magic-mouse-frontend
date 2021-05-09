import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNola } from '../actions/loadAttractionsForLand'
import { incrementNola, decrementNola } from '../actions/countAttractionsForLand'
import NolaAttraction from '../components/NolaAttraction';

class NolaContainer extends Component {

  componentDidMount() {
    this.props.fetchNola()
  }

  render() {
    const listNolaAttractions = () => {
        return this.props.attractions.map(attraction =>
          <NolaAttraction
            key={attraction.id}
            id={attraction.id}
            attractions={this.props.attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementNola={this.props.incrementNola}
            decrementNola={this.props.decrementNola}
            />
        )
      }
    return (
      <div>
        <div className="page-container">
          <h3 className="header">New Orleans Square</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listNolaAttractions()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.nola.list})

export default connect(mapStateToProps, {
  fetchNola,
  incrementNola,
  decrementNola
})(NolaContainer);

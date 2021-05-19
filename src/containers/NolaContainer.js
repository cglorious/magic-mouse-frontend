import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNola } from '../actions/loadAttractionsForLand'
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
            image={attraction.image_url}
            name={attraction.name}
            log={attraction.log}
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

export default connect(mapStateToProps, { fetchNola })(NolaContainer);

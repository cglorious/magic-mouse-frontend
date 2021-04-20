import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAttractions } from '../actions/fetchAttractions'
import Attractions from '../components/Attractions';

class AttractionsContainer extends Component {

  componentDidMount() {
    this.props.fetchAttractions()
  }

  render() {
    return (
      <div className="App">
        <Attractions
          attractions={this.props.attractions}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.attractions.list, count: state.attractions.count})

export default connect(mapStateToProps, { fetchAttractions })(AttractionsContainer);

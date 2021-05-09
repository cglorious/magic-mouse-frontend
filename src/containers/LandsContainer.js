import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLands } from '../actions/fetchLands'
import Lands from '../components/Lands';
import AddAttractionForm from '../components/AddAttractionForm'
import { Link } from 'react-router-dom'

class LandsContainer extends Component {

  componentDidMount() {
    this.props.fetchLands()
  }

  render() {
    return (
      <div className="App">
        <Lands
          lands={this.props.lands}
          />
        <div className="center-btn">
          <Link to='/add-attraction' className="btn btn-primary btn-lg px-4 me-sm-3">Add Attraction</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({lands: state.lands.list})

export default connect(mapStateToProps, { fetchLands
})(LandsContainer);

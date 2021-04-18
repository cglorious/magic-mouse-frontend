import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchParks } from '../actions/fetchParks'
// import Parks from '../components/Parks';

class ParksContainer extends Component {

  componentDidMount() {
    this.props.fetchParks()
  }

  render() {
    return (
      <div className="App">
      Parks
        // <Parks parks={this.props.parks}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({parks: state.parks.list})

export default connect(mapStateToProps, { fetchParks })(ParksContainer);

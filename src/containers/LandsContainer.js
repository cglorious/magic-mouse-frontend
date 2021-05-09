import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLands } from '../actions/fetchLands'
import Lands from '../components/Lands';
import AddAttractionForm from '../components/AddAttractionForm'

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
        <AddAttractionForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({lands: state.lands.list})

export default connect(mapStateToProps, { fetchLands
})(LandsContainer);

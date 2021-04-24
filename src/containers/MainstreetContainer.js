import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMainstreet } from '../actions/loadAttractionsForLand'
import { incrementMainstreet, decrementMainstreet } from '../actions/countAttractionsForLand'
import Mainstreet from '../components/Mainstreet';

class MainstreetContainer extends Component {

  componentDidMount() {
    this.props.fetchMainstreet()
  }

  render() {
    return (
      <div>
        <Mainstreet
          attractions={this.props.attractions}
          incrementMainstreet={this.props.incrementMainstreet}
          decrementMainstreet={this.props.decrementMainstreet} 
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({attractions: state.mainstreet.list})

export default connect(mapStateToProps, {
  fetchMainstreet,
  incrementMainstreet,
  decrementMainstreet
})(MainstreetContainer);

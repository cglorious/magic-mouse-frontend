import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLands } from '../actions/fetchLands'
import Lands from '../components/Lands';

class LandsContainer extends Component {

  state = {
    search: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //lands.map( land => land.attributes.name) - list of lands
  //this.state.search - value of the input
  //compare the state to the letters
  //strings

  // input - search for lands, specific
  // access name
  // value - target?
  // iterate through lands
  // state

  componentDidMount() {
    this.props.fetchLands()
  }

  render() {

    return (
      <div className="App">
        <h4>searchbar container</h4>
          <input
            name='search'
            value={this.state.search}
            onChange={this.handleChange}
            ></input>
        <Lands
          lands={this.props.lands}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({lands: state.lands.list})

const mapDispatchToProps = dispatch => {
  return {
    fetchLands: () => {
      dispatch(fetchLands())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandsContainer);

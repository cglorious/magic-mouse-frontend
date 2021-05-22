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
    this.renderLands()
  }

  //
  renderLands = () => {
    const array = this.props.lands.filter( land => land.attributes.name.includes(this.state.search))
    console.log(array)
  }

  //lands.filter( land => land.attributes.name) - list of lands
  //this.state.search - value of the input

  //lands.filter( land => land.attributes.name.includes(this.state.search))

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
        <p>Enter land name below</p>
          <input
            name='search'
            value={this.state.search}
            onChange={this.handleChange}
            ></input>
      </div>
    );
  }
}

// <Lands
//   lands={this.props.lands}
//   />

const mapStateToProps = state => ({lands: state.lands.list})

const mapDispatchToProps = dispatch => {
  return {
    fetchLands: () => {
      dispatch(fetchLands())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandsContainer);

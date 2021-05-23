import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLands } from '../actions/fetchLands'
import Lands from '../components/Lands';
import "../styles/style.css";

class LandsContainer extends Component {

  state = {
    search: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderLands = () => {
    if (this.state.search === '') {
      return (
        <Lands
          lands={this.props.lands}
          />
      )
    } else {
      let query = this.props.lands.filter( land => land.attributes.name.includes(this.state.search) || land.attributes.name.toLowerCase().includes(this.state.search) )
      if (query.length > 0) {
        return (
          <Lands
            lands={query}
            />
        )
      } else {
        return (
          <div className='error'>Sorry, we can't find that land. Try another search.</div>
        )
      }
    }
  }

  componentDidMount() {
    this.props.fetchLands()
  }

  render() {

    return (
      <div className="App">
        <div className='center'>
          <input
            name='search'
            value={this.state.search}
            onChange={this.handleChange}
            type="search"
            className="form-control ds-input"
            placeholder="Search lands..."
            ></input>
        </div>
        <div>{this.renderLands()}</div>
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

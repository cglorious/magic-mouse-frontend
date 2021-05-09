import React, { Component } from 'react';
import "../styles/style.css";
import { connect } from 'react-redux';
import { addAttraction } from '../actions/addAttraction'
import { Link } from 'react-router-dom'

class AddAttractionForm extends Component {

  state = {
    name: '',
    image_url: '',
    land_id: '',
    closure: false,
    count: 0
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addAttraction(this.state)
    this.setState({
      name: '',
      image_url: '',
      land_id: '',
      closure: false,
      count: 0
    })
  }

  render() {
    return (
      <div className="page-container">
        <h3 className="header">Add an Attraction</h3>
        <form id="add-attraction-form" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Attraction Name:</label>
            <input
              className="form-control"
              name='name'
              type='text'
              placeholder='Indiana Jones'
              value={this.state.name}
              onChange={this.handleChange}
              />
          </div>
          <div class="mb-3">
            <label className="form-label">Image:</label>
            <input
              className="form-control"
              name='image_url'
              type='text'
              placeholder='https://'
              value={this.state.image_url}
              onChange={this.handleChange}
              />
            <div id="emailHelp" class="form-text">Add an image URL for the attraction above.</div>
          </div>

          <select name="land_id" className="form-select" aria-label="Default select example" onChange={this.handleChange}>
            <option selected>Choose a Land</option>
            <option value="1">Star Wars</option>
            <option value="2">Fantasyland</option>
            <option value="3">Tomorrowland</option>
            <option value="4" >Adventureland</option>
            <option value="5" >Critter Country</option>
            <option value="6" >Frontierland</option>
            <option value="7" >Mainstreet, U.S.A.</option>
            <option value="8" >Mickey's Toontown</option>
            <option value="9" >New Orleans Square</option>
          </select>
          <br/><br/>
          <p id="center-btn">
              <button type="submit" className="btn btn-primary">Submit</button>
          </p>
        </form>
      </div>
    );
  }
};

export default connect(null, {addAttraction})(AddAttractionForm);

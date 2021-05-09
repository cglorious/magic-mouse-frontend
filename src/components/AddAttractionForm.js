import React, { Component } from 'react';
import "../styles/style.css";
import { connect } from 'react-redux';
import { addAttraction } from '../actions/addAttraction'

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
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Attraction Name: </label>
          <input
            name='name'
            type='text'
            placeholder='Indiana Jones'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label>Image: </label>
          <input
            name='image_url'
            type='text'
            placeholder='https://'
            value={this.state.image}
            onChange={this.handleChange}
          />
          <br />
          <label for="cars">Choose a land:</label>
            <select name="land_id" id="cars" onChange={this.handleChange}>
              <option value="1" >Star Wars</option>
              <option value="2" >Fantasyland</option>
              <option value="3" >Tomorrowland</option>
              <option value="3" >Adventureland</option>
              <option value="3" >Critter Country</option>
              <option value="3" >Frontierland</option>
              <option value="3" >Mainstreet, U.S.A.</option>
              <option value="3" >Mickey's Toontown</option>
              <option value="3" >New Orleans Square</option>
            </select>
          <input
          type='submit'
          />
        </form>
      </div>
    );
  }
};

export default connect(null, {addAttraction})(AddAttractionForm);

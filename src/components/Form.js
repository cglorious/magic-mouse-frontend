import React, { Component } from 'react';
import "../styles/style.css";
import { connect } from 'react-redux';
import { addAttraction } from '../actions/addAttraction'

class Form extends Component {

  state = {
    name: '',
    image_url: '',
    land_id: 1,
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
          <input
          type='submit'
          />
        </form>
      </div>
    );
  }
};

export default connect(null, {addAttraction})(Form);

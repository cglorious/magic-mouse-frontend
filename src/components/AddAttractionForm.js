import React, { Component } from 'react';
import "../styles/style.css";
import { connect } from 'react-redux';
import { addAttraction } from '../actions/addAttraction'

class AddAttractionForm extends Component {

  state = {
    name: '',
    image_url: '',
    land_id: '',
    log: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log('a')
    this.props.addAttraction(this.state)
    console.log('g')
    this.setState({
      name: '',
      image_url: '',
      land_id: '',
      log: ''
    })
  }

  render() {
    return (
      <div className="page-container">
        <h3 className="header">Add a Memory</h3>
        <form id="add-attraction-form" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Attraction:</label>
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
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">About:</label>
            <textarea
              className="form-control"
              name='log'
              placeholder='This attraction was my favorite!'
              value={this.state.log}
              onChange={this.handleChange}
              rows="3"></textarea>
            <div className="form-text"><small>Log your experience.</small></div>
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

const mapDispatchToProps = dispatch => {
  return {
    addAttraction: (data) => {
      dispatch(addAttraction(data))
    }
  };
};

export default connect(null, mapDispatchToProps)(AddAttractionForm);

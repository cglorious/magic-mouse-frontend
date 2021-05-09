import React, { Component } from 'react';
import "../styles/style.css";
import { connect } from 'react-redux';
import { patchStarWars } from '../actions/patchAttraction'

class StarWarsAttraction extends Component {

    render() {

      const { attraction, name, id, image, currentState, incrementStarWars, decrementStarWars } = this.props

      const updatedCount = id => {
        return currentState.find(attraction => id === attraction.id).count
      }

      const renderCount = () => {
        document.getElementById(name).innerHTML = updatedCount(id)
      }

    return(
      <div>
        <div id="card-container">
        <div className="card" id="resort-card">
          <img
            id="attraction-card-image"
            className="card-img-top"
            src={image}
            alt={name}
            />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
              <div>
                <h1 id={this.props.name}>0</h1>
                <p>
                  <button id={id} className="btn btn-primary" onClick={() => {
                      incrementStarWars(id)
                      patchStarWars(attraction)
                      renderCount()}
                    }>+</button>    <button id={id} className="btn btn-primary" onClick={ () => {
                      decrementStarWars(id)
                      renderCount()}
                    }>-</button>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

};

const mapStateToProps = state => ({currentState: state.starWars.list})

export default connect(mapStateToProps, {patchStarWars})(StarWarsAttraction);

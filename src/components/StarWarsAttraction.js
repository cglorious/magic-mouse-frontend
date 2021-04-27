import React, { Component } from 'react';
import "../styles/style.css";
import { connect } from 'react-redux';

class StarWarsAttraction extends Component {

    render() {
      const renderCount = id => {
        return this.props.currentState.find(attraction => this.props.id === attraction.id).count
      }

      const log = id => {
        return this.props.currentState.find(attraction => id === attraction.id).count
      }

      const changeCount = () => {
        document.getElementById(this.props.name).innerHTML = log(this.props.id)
      }

    return(
      <div>
        <div id="card-container">
        <div className="card" id="resort-card">
          <img
            id="attraction-card-image"
            className="card-img-top"
            src={this.props.image}
            alt={this.props.name}
            />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
              <div>
                <h1 id={this.props.name}>0</h1>
                <p>
                  <button id={this.props.id} className="btn btn-primary" onClick={() => {
                      this.props.incrementStarWars(this.props.id)
                      changeCount()
                      log(this.props.id)}
                    }>+</button>    <button id={this.props.id} className="btn btn-primary" onClick={ () =>
                    {this.props.decrementStarWars(this.props.id)
                      changeCount()}
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

export default connect(mapStateToProps)(StarWarsAttraction);

import React, { Component }  from 'react';
import "../styles/style.css";
import { connect } from 'react-redux';

class CritterCountryAttraction extends Component {

  render() {

  const { id, image, name, currentState, incrementCritterCountry, decrementCritterCountry } = this.props

  const updatedCount = id => {
    return currentState.find(attraction => id === attraction.id).count
  }

  const renderCount = () => {
    document.getElementById(name).innerHTML = updatedCount(id)
  }
  return (
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
            <h5 className="card-title">{name}</h5>
              <div>
                <h1 id={name}>0</h1>
                <p>
                  <button id={id} className="btn btn-primary" onClick={() => {
                      incrementCritterCountry(id)
                      renderCount()}
                    }>+</button>    <button id={id} className="btn btn-primary" onClick={ () => {
                      decrementCritterCountry(id)
                      renderCount()}
                    }>-</button>                </p>
              </div>
          </div>
      </div>
    </div>
    </div>
  );
};
};

const mapStateToProps = state => ({currentState: state.critterCountry.list})

export default connect(mapStateToProps)(CritterCountryAttraction);

import React, { Component }  from 'react';
import "../styles/style.css";
import { connect } from 'react-redux';

class MickeysToontownAttraction extends Component {

  render() {
  const { id, image, name, currentState, incrementMickeysToontown, decrementMickeysToontown } = this.props

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
                      incrementMickeysToontown(id)
                      renderCount()}
                    }>+</button>    <button id={id} className="btn btn-primary" onClick={ () => {
                      decrementMickeysToontown(id)
                      renderCount()}
                    }>-</button>
                </p>
              </div>
          </div>
      </div>
    </div>
    </div>
  );
};

};

const mapStateToProps = state => ({currentState: state.mickeysToontown.list})

export default connect(mapStateToProps)(MickeysToontownAttraction);

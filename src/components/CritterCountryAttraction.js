import React from 'react';
import "../styles/style.css";

const CritterCountryAttraction = ({id, image, name, count, incrementCritterCountry, decrementCritterCountry}) => {

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
                <h1>{count}</h1>
                <p>
                  <button id={id} className="btn btn-primary" onClick={() => incrementCritterCountry(id)}>+</button>    <button id={id} className="btn btn-primary" onClick={ () => decrementCritterCountry(id)}>-</button>
                </p>
              </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default CritterCountryAttraction;

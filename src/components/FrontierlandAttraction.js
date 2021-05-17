import React from 'react';
import "../styles/style.css";

const FrontierlandAttraction = ({ id, image, name, log }) => {

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
                <p id={id}>
                  {log}
                </p>
              </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default FrontierlandAttraction;

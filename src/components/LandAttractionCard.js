import React from 'react';
import { Link } from "react-router-dom";
import "../styles/style.css";

const LandAttractionCard = ({ key, image, name, description, loadAttractionsForLand}) => {

    return(
      <div>
        <div id="card-container">
        <div className="card" id="resort-card">
          <img
            id="park-card-image"
            className="card-img-top"
            src={image}
            alt={name}
            />
          <div className="card-body">
            <h5 className="card-title">
              <button
              className="btn btn-primary"
              onClick={() =>
                loadAttractionsForLand(key)

              }
              >
              {name}
              </button>
            </h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
    );

};

export default LandAttractionCard;

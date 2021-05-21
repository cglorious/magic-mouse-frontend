import React from 'react';
import "../styles/style.css";
import { Link } from 'react-router-dom'

const Land = ({id, image, name, description, slug}) => {

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
              <Link to={slug}>{name}</Link>
            </h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
    );

};

export default Land;

import React from 'react';
import { Link } from "react-router-dom";
import "../styles/style.css";

const Land = props => {

    return(
      <div>
        <div id="card-container">
        <div className="card" id="resort-card">
          <img
            id="park-card-image"
            className="card-img-top"
            src={props.image}
            alt={props.name}
            />
          <div className="card-body">
            <h5 className="card-title">
              <Link to="/lands/attractions">{props.name}</Link>
            </h5>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
    );

};

export default Land;

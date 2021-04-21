import React from 'react';
import { Link } from "react-router-dom";
import "../styles/style.css";

const Attraction = props => {

    return(
      <div>
        <div id="card-container">
        <div className="card" id="resort-card">
          <img
            id="attraction-card-image"
            className="card-img-top"
            src={props.image}
            alt={props.name}
            />
          <div className="card-body">
            <h5 class="card-title">{props.name}</h5>
            <button class="btn btn-primary">+</button>  0  <button class="btn btn-primary">-</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Attraction;

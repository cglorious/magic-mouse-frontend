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
            <h5 class="card-title">{props.name}</h5>
            <p>{props.description}</p>
            <a href={props.slug} class="btn btn-primary">Visit</a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Land;

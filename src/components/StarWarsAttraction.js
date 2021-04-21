import React from 'react';
import { Link } from "react-router-dom";
import "../styles/style.css";
import CounterContainer from '../containers/CounterContainer'

const StarWarsAttraction = ({image, name, closure}) => {

    return(
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
            <h5 class="card-title">{name}</h5>
            <CounterContainer/ >
          </div>
        </div>
      </div>
    </div>
    );
};

export default StarWarsAttraction;

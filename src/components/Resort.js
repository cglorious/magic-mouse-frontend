import React from 'react';
import { Link } from "react-router-dom";
import "../styles/style.css";

const Resort = ({ key, slug, image, name, location}) => {

    return(
      <div>
        <div className="card" id="resort-card">
          <img
            className="card-img-top"
            src={image}
            alt={name}
            />
          <div className="card-body">
            <h5 class="card-title">{name}</h5>
            <p className="card-text">{location}</p>
            <a href={slug} class="btn btn-primary">Visit</a>
          </div>
        </div>
    </div>
    );
};

export default Resort;

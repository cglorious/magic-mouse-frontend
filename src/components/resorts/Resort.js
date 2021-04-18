import React from 'react';
import { Link } from "react-router-dom";
// import ".../styles/style.css";

const Resort = props => {

  // console.log(props.parks)

    return(
      <div>
        <div id="card-container">
        <div className="card" id="resort-card">
          <img
            className="card-img-top"
            src={props.image}
            alt={props.name}
            />
          <div className="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p className="card-text">{props.location}</p>
            <a href="/parks" class="btn btn-primary">Visit</a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Resort;

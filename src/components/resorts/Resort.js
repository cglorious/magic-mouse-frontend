import React from 'react';
import { Link } from "react-router-dom";
// import ".../styles/style.css";

const Resort = props => {

  const listParks = () => {
    const array = props.parks
    for (let i = 0; i < array.length; i++) {
      console.log(array[i].id)
    }
  }

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
            <a href={props.slug} class="btn btn-primary">Visit</a>
            {listParks()}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Resort;

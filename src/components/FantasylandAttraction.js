import React from 'react';
import { Link } from "react-router-dom";
import "../styles/style.css";

const FantasylandAttraction = ({id, image, name, count, incrementFantasyland, decrementFantasyland}) => {

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
                <div>
                  <h1>{count}</h1>
                  <p>
                    <button id={id} className="btn btn-primary" onClick={() => {incrementFantasyland(id)}}>+</button>    <button id={id} className="btn btn-primary" onClick={ () => decrementFantasyland(id)}>-</button>
                  </p>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
};

export default FantasylandAttraction;

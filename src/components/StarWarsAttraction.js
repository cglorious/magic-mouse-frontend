import React from 'react';
import "../styles/style.css";

const StarWarsAttraction = ({id, attraction, attractions, image, name, count, incrementStarWars, decrementStarWars}) => {

  //find the attraction from the state and render the count
  const renderState = () => {
    return attractions.find(el => el.id === id).count
  }

  // <h1>{renderState()}</h1>

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
            <h5 className="card-title">{name}</h5>
              <div>
                <h1>{count}</h1>
                <p>
                  <button id={id} className="btn btn-primary" onClick={() => {incrementStarWars(id)} }>+</button>    <button id={id} className="btn btn-primary" onClick={ () => decrementStarWars(id)}>-</button>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default StarWarsAttraction;

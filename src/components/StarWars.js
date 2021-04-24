import React from 'react';
import StarWarsAttraction from './StarWarsAttraction';
import "../styles/style.css";

const StarWars = ({attractions, counter, increment, decrement}) => {

//error - cannot read property map of undefined
//attractions: [{}, {}]
//count: [0,0]

  const listStarWarsAttractions = () => {
      const array = {attractions}
      return attractions.map(attraction =>
          <StarWarsAttraction
            key={attraction.id}
            id={attraction.id}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            counter={counter}
            increment={increment}
            decrement={decrement}
            />
      )
    }

  return (
    <div>
        <div className="page-container">
          <h3 className="header">Star Wars</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listStarWarsAttractions()}
          </div>
        </div>
    </div>
  );
};

export default StarWars;

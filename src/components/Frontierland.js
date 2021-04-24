import React from 'react';
import "../styles/style.css";
import FrontierlandAttraction from './FrontierlandAttraction'

const Frontierland = ({attractions, incrementFrontierland, decrementFrontierland}) => {

  const listFrontierlandAttractions = () => {
      return attractions.map(attraction =>
          <FrontierlandAttraction
            key={attraction.id}
            id={attraction.id}
            attraction={attraction}
            attractions={attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementFrontierland={incrementFrontierland}
            decrementFrontierland={decrementFrontierland}
            />
      )
    }

  return (
    <div>
      <div className="page-container">
        <h3 className="header">Frontierland</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {listFrontierlandAttractions()}
        </div>
      </div>
    </div>
  );
};

export default Frontierland;

import React from 'react';
import TomorrowlandAttraction from './TomorrowlandAttraction';
import "../styles/style.css";

const Tomorrowland = ({attractions, incrementTomorrowland, decrementTomorrowland}) => {

  const listTomorrowlandAttractions = () => {
      return attractions.map(attraction =>
          <TomorrowlandAttraction
            key={attraction.id}
            id={attraction.id}
            attraction={attraction}
            attractions={attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementTomorrowland={incrementTomorrowland}
            decrementTomorrowland={decrementTomorrowland}
            />
      )
    }

  return (
    <div>
      <div className="page-container">
        <h3 className="header">Tomorrowland</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {listTomorrowlandAttractions()}
        </div>
      </div>
    </div>
  );
};

export default Tomorrowland;

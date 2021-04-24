import React from 'react';
import "../styles/style.css";
import AdventurelandAttraction from './AdventurelandAttraction'

const Adventureland = ({attractions, incrementAdventureland, decrementAdventureland}) => {

  const listAdventurelandAttractions = () => {
      return attractions.map(attraction =>
          <AdventurelandAttraction
            key={attraction.id}
            id={attraction.id}
            attraction={attraction}
            attractions={attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementAdventureland={incrementAdventureland}
            decrementAdventureland={decrementAdventureland}
            />
      )
    }

  return (
    <div>
      <div className="page-container">
        <h3 className="header">Adventureland</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {listAdventurelandAttractions()}
        </div>
      </div>
    </div>
  );
};

export default Adventureland;

import React from 'react';
import "../styles/style.css";
import CritterCountryAttraction from './CritterCountryAttraction'

const CritterCountry = ({attractions, incrementCritterCountry, decrementCritterCountry}) => {

  const listCritterCountryAttractions = () => {
      return attractions.map(attraction =>
          <CritterCountryAttraction
            key={attraction.id}
            id={attraction.id}
            attraction={attraction}
            attractions={attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementCritterCountry={incrementCritterCountry}
            decrementCritterCountry={decrementCritterCountry}
            />
      )
    }

  return (
    <div>
      <div className="page-container">
        <h3 className="header">Critter Country</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {listCritterCountryAttractions()}
        </div>
      </div>
    </div>
  );
};

export default CritterCountry;

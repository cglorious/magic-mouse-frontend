import React from 'react';
import "../styles/style.css";
import MickeysToontownAttraction from './MickeysToontownAttraction'

const MickeysToontown = ({attractions, incrementMickeysToontown, decrementMickeysToontown}) => {

  const listMickeysToontownAttractions = () => {
      return attractions.map(attraction =>
          <MickeysToontownAttraction
            key={attraction.id}
            id={attraction.id}
            attraction={attraction}
            attractions={attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementMickeysToontown={incrementMickeysToontown}
            decrementMickeysToontown={decrementMickeysToontown}
            />
      )
    }

  return (
    <div>
      <div className="page-container">
        <h3 className="header">Mickey's Toontown</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {listMickeysToontownAttractions()}
        </div>
      </div>
    </div>
  );
};

export default MickeysToontown;

import React from 'react';
import LandAttraction from './LandAttraction';
import "../styles/style.css";

const LandAttractions = ({landAttractions}) => {

  const listLandAttractions = () => {
      return landAttractions.map(attraction =>
        <LandAttraction
          key={attraction.id}
          image={attraction.attributes.image_url}
          name={attraction.attributes.name}
          />
      )
    }

  return (
    <div>
        <div className="page-container">
          <h3 className="header">Travel Around the Lands</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listLandAttractions()}
          </div>
        </div>
    </div>
  );
};

export default LandAttractions;

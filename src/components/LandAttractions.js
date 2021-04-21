import React from 'react';
import LandAttractionCard from './LandAttractionCard';
import "../styles/style.css";

const LandAttractions = ({landAttractions, loadAttractionsForLand}) => {

  const listLandAttractions = () => {
      return landAttractions.map(attraction =>
        <LandAttractionCard
          key={attraction.id}
          id={attraction.id}
          image={attraction.attributes.image_url}
          name={attraction.attributes.name}
          description={attraction.attributes.description}
          loadAttractionsForLand={loadAttractionsForLand}
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

import React from 'react';
import Attraction from './Attraction';
import "../styles/style.css";

const Attractions = ({attractions}) => {

  const listAttractions = () => {
      return attractions.map(attraction =>
        //if attraction.attributes.land_id === landId
        <Attraction
          key={attraction.id}
          slug={attraction.attributes.slug}
          image={attraction.attributes.image_url}
          name={attraction.attributes.name}
          closure={attraction.attributes.closure}
          />
      )
    }

  return (
    <div>
        <div className="page-container">
          <h3 className="header">Visit the Attractions</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listAttractions()}
          </div>
        </div>
    </div>
  );
};

export default Attractions;

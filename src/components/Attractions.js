import React from 'react';
import Attraction from './Attraction';
import "../styles/style.css";

const Attractions = ({attractions}) => {

  const listAttractions = () => {
      return attractions.map(attraction =>
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
          <h3 className="header">View All Attractions</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listAttractions()}
          </div>
        </div>
    </div>
  );
};

export default Attractions;

import React from 'react';
import Park from './Park';
import "../styles/style.css";

const Parks = ({parks}) => {

  const listParks = () => {
      return parks.map(park =>
        <Park
          key={park.id}
          slug={park.attributes.slug}
          image={park.attributes.image_url}
          name={park.attributes.name}
          />
      )
    }

  return (
    <div>
        <div className="page-container">
          <h3 className="header">Disney Theme Parks</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listParks()}
          </div>
        </div>
    </div>
  );
};

export default Parks;

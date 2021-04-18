import React from 'react';
import Park from './Park';
import "../styles/style.css";

const Parks = ({parks}) => {

const listParks = () => {
    return parks.map(resort =>
      <Park
        key={resort.id}
        slug={resort.attributes.slug}
        image={resort.attributes.image_url}
        name={resort.attributes.name}
        />
    )
  }

  return (
    <div id="center">
        <div>
          {listParks()}
        </div>
    </div>
  );
};

export default Parks;

import React from 'react';
import Park from './Park';
// import "../styles/style.css";

const Parks = ({parks}) => {

  //list only parks that belong to resort

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
    <div id="center">
        <div>
          <h3>Choose a theme park.</h3>
          {listParks()}
        </div>
    </div>
  );
};

export default Parks;

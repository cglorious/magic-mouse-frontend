import React from 'react';
import Park from './Park';
// import "../styles/style.css";

const Parks = ({parks}) => {

  //list only parks that belong to resort

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
          <h3>Choose a theme park.</h3>
          {listParks()}
        </div>
    </div>
  );
};

export default Parks;

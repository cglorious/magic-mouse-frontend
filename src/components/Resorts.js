import React from 'react';
import Resort from './Resort';
import "../styles/style.css";

const Resorts = ({resorts, findParks }) => {

  //add parks

  const listResorts = () => {
      return resorts.map(resort =>
        <Resort
          key={resort.id}
          slug={resort.attributes.slug}
          image={resort.attributes.image_url}
          name={resort.attributes.name}
          location={resort.attributes.location}
          findParks={findParks}
          />
      )
    }

  return (
    <div>
      <div className="page-container">
        <h3 className="header">Disney Resorts</h3>

        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
          {listResorts()}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Resorts;

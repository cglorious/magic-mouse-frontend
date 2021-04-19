import React from 'react';
import Resort from './Resort';
import "../styles/style.css";

const Resorts = ({resorts}) => {

  //add parks

  const listResorts = () => {
      return resorts.map(resort =>
        <Resort
          key={resort.id}
          slug={resort.attributes.slug}
          image={resort.attributes.image_url}
          name={resort.attributes.name}
          location={resort.attributes.location}
          parks={resort.attributes.parks}
          />
      )
    }

  return (
    <div>
      <div id="resorts">
        <h3 id="resorts-header">Where would you like to travel?</h3>

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

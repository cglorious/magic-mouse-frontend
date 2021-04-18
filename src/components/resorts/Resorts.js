import React from 'react';
import Resort from './Resort';
// import ".../styles/style.css";

const Resorts = ({resorts}) => {

const listResorts = () => {
    return resorts.map(resort =>
      <Resort
        key={resort.id}
        slug={resort.attributes.slug}
        image={resort.attributes.image_url}
        name={resort.attributes.name}
        location={resort.attributes.location}
        />
    )
  }

  return (
    <div id="center">
        <h3>Where would you like to travel?</h3>

        <div>
          {listResorts()}
        </div>
    </div>
  );
};

export default Resorts;

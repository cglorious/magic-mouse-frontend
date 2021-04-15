import React from 'react';
import Resort from './Resort';

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
    <div>
      <container>
        <h3>Where would you like to travel?</h3>

        <div>
          {listResorts()}
        </div>
      </container>
    </div>
  );
};

export default Resorts;

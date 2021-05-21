import React from 'react';
import Land from './Land';
import "../styles/style.css";

const Lands = ({lands}) => {

  const listLands = () => {
      return lands.map(land =>
        <Land
          key={land.id}
          id={land.id}
          image={land.attributes.image_url}
          name={land.attributes.name}
          description={land.attributes.description}
          slug={land.attributes.slug}
          />
      )
    }

  return (
    <div>
        <div className="page-container">
          <h3 className="header">Travel Around the Lands</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listLands()}
          </div>
        </div>
    </div>
  );
};

export default Lands;

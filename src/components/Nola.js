import React from 'react';
import NolaAttraction from './NolaAttraction';
import "../styles/style.css";

const Nola = ({attractions, incrementNola, decrementNola}) => {

  const listNolaAttractions = () => {
      return attractions.map(attraction =>
          <NolaAttraction
            key={attraction.id}
            id={attraction.id}
            attraction={attraction}
            attractions={attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementNola={incrementNola}
            decrementNola={decrementNola}
            />
      )
    }

  return (
    <div>
      <div className="page-container">
        <h3 className="header">New Orleans Square</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {listNolaAttractions()}
        </div>
      </div>
    </div>
  );
};

export default Nola;

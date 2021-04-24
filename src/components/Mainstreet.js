import React from 'react';
import "../styles/style.css";
import MainstreetAttraction from './MainstreetAttraction'

const Mainstreet = ({attractions, incrementMainstreet, decrementMainstreet}) => {

  const listMainstreetAttractions = () => {
      return attractions.map(attraction =>
          <MainstreetAttraction
            key={attraction.id}
            id={attraction.id}
            attraction={attraction}
            attractions={attractions}
            image={attraction.image_url}
            name={attraction.name}
            count={attraction.count}
            incrementMainstreet={incrementMainstreet}
            decrementMainstreet={decrementMainstreet}
            />
      )
    }

  return (
    <div>
      <div className="page-container">
        <h3 className="header">Mainstreet</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {listMainstreetAttractions()}
        </div>
      </div>
    </div>
  );
};

export default Mainstreet;

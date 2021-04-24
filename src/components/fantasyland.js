import React from 'react';
import FantasylandAttraction from './FantasylandAttraction';
import "../styles/style.css";

const Fantasyland = ({attractions, incrementFantasyland, decrementFantasyland}) => {
  
  const listFantasylandAttractions = () => {
      return attractions.map(attraction =>
        <FantasylandAttraction
          key={attraction.id}
          id={attraction.id}
          image={attraction.image_url}
          name={attraction.name}
          count={attraction.count}
          increment={incrementFantasyland}
          decrement={decrementFantasyland}
          />
      )
    }

  return (
    <div>
        <div className="page-container">
          <h3 className="header">Fantasyland</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listFantasylandAttractions()}
          </div>
        </div>
    </div>
  );
};

export default Fantasyland;

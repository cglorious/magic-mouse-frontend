import React from 'react';
import "../styles/style.css";
import FrontierlandAttraction from './FrontierlandAttraction'

const Frontierland = ({attractions, incrementFrontierland, decrementFrontierland}) => {

  return (
    <div>
      <FrontierlandAttraction />
    </div>
  );
};

export default Frontierland;

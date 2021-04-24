import React from 'react';
import TomorrowlandAttraction from './TomorrowlandAttraction';
import "../styles/style.css";

const Tomorrowland = ({attractions, incrementTomorrowland, decrementTomorrowland}) => {

  return (
    <div>
      <TomorrowlandAttraction />
    </div>
  );
};

export default Tomorrowland;

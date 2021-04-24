import React from 'react';
import "../styles/style.css";
import AdventurelandAttraction from './AdventurelandAttraction'

const Adventureland = ({attractions, incrementAdventureland, decrementAdventureland}) => {

  return (
    <div>
      <AdventurelandAttraction />
    </div>
  );
};

export default Adventureland;

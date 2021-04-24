import React from 'react';
import "../styles/style.css";
import CritterCountryAttraction from './CritterCountryAttraction'

const CritterCountry = ({attractions, incrementCritterCountry, decrementCritterCountry}) => {

  return (
    <div>
      <CritterCountryAttraction />
    </div>
  );
};

export default CritterCountry;

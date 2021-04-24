import React from 'react';
import "../styles/style.css";
import MainstreetAttraction from './MainstreetAttraction'

const Mainstreet = ({attractions, incrementMainstreet, decrementMainstreet}) => {

  return (
    <div>
      <MainstreetAttraction />
    </div>
  );
};

export default Mainstreet;

import React from 'react';
import NolaAttraction from './NolaAttraction';
import "../styles/style.css";

const Nola = ({attractions, incrementNola, decrementNola}) => {

  return (
    <div>
      <NolaAttraction />
    </div>
  );
};

export default Nola;

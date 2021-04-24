import React from 'react';
import "../styles/style.css";
import MickeysToontownAttraction from './MickeysToontownAttraction'

const MickeysToontown = ({attractions, incrementMickeysToontown, decrementMickeysToontown}) => {

  return (
    <div>
      <MickeysToontownAttraction />
    </div>
  );
};

export default MickeysToontown;

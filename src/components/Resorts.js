import React from 'react';
import Resort from './Resort';

const Resorts = ({resorts}) => {

  return (
    <div className="App">
      <div className="resorts-list">
      <Resort
        slug="/disneyland-resort"
        key="1"
        name="Disneyland Resort"
        location="Anaheim, CA USA"
        image="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/2/1280/720/75/dam/disneyland/home/destination/sleeping-beauty-castle-tint-16x9.jpg"
        />
        <p>Disneyworld Resort</p>
        <p>Toyko Disney Resort</p>
      </div>
    </div>
  );
};

export default Resorts;

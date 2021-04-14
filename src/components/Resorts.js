import React from 'react';
import Resort from './Resort';

const Resorts = ({resorts}) => {

//function - iterate through data and create Resort components

  return (
    <div className="App">
      <h3>Where would you like to travel?</h3>
      <Resort
        slug="/disneyland-resort"
        key="1"
        name="Disneyland Resort"
        location="Anaheim, CA USA"
        image="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/2/1280/720/75/dam/disneyland/home/destination/sleeping-beauty-castle-tint-16x9.jpg"
        />
      <br />
      <Resort
        slug="/disneyworld-resort"
        key="2"
        name="Walt Disney Resort"
        location="Orlando, FL, USA"
        image="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2020/02/bcc92834982402984029834.jpg"
          />
        <br />
      <Resort
        slug="/tokyo-disney-resort"
        key="3"
        name="Tokyo Disney Resort"
        location="Tokyo, Japan"
        image="https://www.slashfilm.com/wp/wp-content/images/tokyo-disneyland-e1592926525256.jpeg"
        />
    </div>
  );
};

export default Resorts;

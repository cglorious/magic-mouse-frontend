import React from 'react';
import "../styles/style.css";

const Resort = ({ key, slug, image, name, location, findParks }) => {

  // const listParks = () => {
  //   const array = props.parks
  //   for (let i = 0; i < array.length; i++) {
  //     console.log(array[i].id)
  //   }
  // }

  //render ParksContainer on click
  //only render parks that belong to resort

  debugger

    return(
      <div>
        <div className="col">
          <div id="card-container">
          <div className="card h-100" id="resort-card">
            <img
              id="resort-card-image"
              className="card-img-top"
              src={image}
              alt={name}
              />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{location}</p>
                <a
                href={slug}
                className="btn btn-primary"
                onClick={() => findParks({key})}
                >Visit</a>
                </div>
          </div>
      </div>
        </div>
    </div>
    );
};

export default Resort;

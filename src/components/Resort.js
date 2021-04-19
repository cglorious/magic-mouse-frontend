import React from 'react';
// import ".../styles/style.css";

const Resort = props => {

  const listParks = () => {
    const array = props.parks
    for (let i = 0; i < array.length; i++) {
      console.log(array[i].id)
    }
  }

  //render ParksContainer on click
  //only render parks that belong to resort

    return(
      <div>
        <div id="card-container">
        <div className="card" id="resort-card">
          <img
            className="card-img-top"
            src={props.image}
            alt={props.name}
            />
          <div className="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p className="card-text">{props.location}</p>
            <a
              href={props.slug}
              className="btn btn-primary"
              >Visit</a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Resort;

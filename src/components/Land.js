import React from 'react';
import "../styles/style.css";

const Land = ({id, slug, image, name, description}) => {

  const handleClick = () => {
    switch (id) {
      case "1":
        return '/lands/star-wars'
      case "2":
        return '/lands/fantasyland'
      case "3":
        return '/lands/tomorrowland'
      case "4":
        return '/lands/adventureland'
      case "5":
        return '/lands/critter-country'
      case "6":
        return '/lands/frontierland'
      case "7":
        return '/lands/mainstreet-usa'
      case "8":
        return '/lands/mickeys-toontown'
      case "9":
        return '/lands/new-orleans-square'
      default:
        return '/all-attractions'
    }
  }

    return(
      <div>
        <div id="card-container">
        <div className="card" id="resort-card">
          <img
            id="park-card-image"
            className="card-img-top"
            src={image}
            alt={name}
            />
          <div className="card-body">
            <h5 className="card-title">
              <Link to={handleClick()}>{name}</Link>
            </h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
    );

};

export default Land;

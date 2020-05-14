import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RentalAssets from './RentalAssets';

const RentalInfo = ({ rental }) => {
  const {
    title,
    isShared,
    category,
    city,
    numOfRooms,
    numOfBathrooms,
    description
  } = rental;
  return (
    <div className="rental">
      <h2 className={`rental-type pms-text-${category}`}>
        {isShared ? 'Shared' : 'Whole'} 
        {' '}
        {category}
      </h2>
      <h1 className="rental-title">{title}</h1>
      <h2 className="rental-city text-capitalize">{city}</h2>
      <div className="rental-room-info">
        <span>
          <FontAwesomeIcon icon="building" />
          {numOfRooms}
          {' '}
          bedrooms
          {' '}
        </span>
        <span>
          <FontAwesomeIcon icon="user" /> 
          {' '}
          {numOfRooms + 4}
          {' '}
          guests
        </span>
        <span>
          <FontAwesomeIcon icon="bed" /> 
          {' '}
          {numOfRooms + 2}
          {' '}
          beds
        </span>
        <span>
          <FontAwesomeIcon icon="toilet" /> 
          {' '}
          {numOfBathrooms}
          {' '}
          {numOfBathrooms > 1 ? 'bathrooms' : 'bathroom'}
          {' '}
        </span>
      </div>
      <p className="rental-description">{description}</p>
      <hr />
      <RentalAssets />
    </div>
  );
};

RentalInfo.propTypes = {
  rental: PropTypes.shape({
    title: PropTypes.string,
    numOfRooms: PropTypes.number,
    numOfBathrooms: PropTypes.number,
    isShared: PropTypes.bool,
    category: PropTypes.string,
    city: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

export default RentalInfo;

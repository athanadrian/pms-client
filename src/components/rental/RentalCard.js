import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RentalCard = ({ rental }) => {
  const {
    _id,
    image,
    isShared,
    category,
    city,
    description,
    isRentedPerDay,
    dailyPrice,
    monthlyPrice
  } = rental;

  return (
    <Link className="pms-rental-link" to={`/rentals/${_id}`}>
      <div className="card pms-card">
        <img className="card-img-top" src={image} alt="Card cap" />
        <div className="card-body">
          <h6 className={`card-subtitle mb-0 pms-text-${category}`}>
            {isShared ? 'Shared' : 'Whole'} 
            {' '}
            {category}
            {' '}
            &#183; 
            {' '}
            {city}
          </h6>
          <h5 className="card-title big-font">{description}</h5>
          <p className="card-text">
            {isRentedPerDay
              ? `${dailyPrice}€ per Day`
              : `${monthlyPrice}€ per Month`}
            {' '}
            &#183; Free Cancelation
          </p>
        </div>
      </div>
    </Link>
  );
};

RentalCard.propTypes = {
  rental: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    isShared: PropTypes.bool,
    category: PropTypes.string,
    city: PropTypes.string,
    description: PropTypes.string,
    isRentedPerDay: PropTypes.bool,
    dailyPrice: PropTypes.number,
    monthlyPrice: PropTypes.number
  }).isRequired
};

export default RentalCard;

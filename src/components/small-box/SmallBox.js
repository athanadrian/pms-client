import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PropertyIcon } from '../../icons';

const SmallBox = (props) => {
  const { type, icon, count, title, navigateTo } = props;

  let className = `small-box pms-box-`;
  switch (type) {
    case 'property':
      className += 'properties';
      break;
    case 'owner':
      className += 'owners';
      break;
    case 'renter':
      className += 'renters';
      break;
    case 'payment':
      className += 'payments';
      break;
    case 'project':
      className += 'projects';
      break;
    case 'expense':
      className += 'expenses';
      break;
    default:
      className += 'properties';
      break;
  }

  // iconClass += icon ? ` ${icon}` : ' ion-bag';

  return (
    <div className={className}>
      <div className="inner">
        <h3>{count}</h3>
        <p>{title}</p>
      </div>
      <div className="icon">{icon}</div>
      <Link to={navigateTo} className="small-box-footer">
        <span className="mr-2">More info</span>
        <i className="fa fa-arrow-circle-right" />
      </Link>
    </div>
  );
};

SmallBox.propTypes = {
  type: PropTypes.oneOf([
    'property',
    'owner',
    'renter',
    'payment',
    'project',
    'expense'
  ]),
  icon: PropTypes.element,
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired
};

SmallBox.defaultProps = {
  type: 'property',
  icon: <PropertyIcon />
};

export default SmallBox;

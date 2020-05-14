import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import RentalCard from '../../components/rental/RentalCard';
import ContentHeader from '../../components/content-templates/ContentHeader';
import { fetchRentals } from '../../actions';

const RentalsList = ({ rentals, dispatch }) => {
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchRentals());
  }, [dispatch]);

  const renderRentals = (data) =>
    data.map((rental) => (
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental} />
      </div>
    ));

  return (
    <>
      <ContentHeader history={history} show={false} />
      <hr />
      <div className="card-list">
        <div className="container">
          <h1 className="page-title">Your Rentals All Around the World</h1>
          <div className="row">{renderRentals(rentals)}</div>
        </div>
      </div>
    </>
  );
};

RentalsList.propTypes = {
  rentals: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      isShared: PropTypes.bool,
      category: PropTypes.string,
      city: PropTypes.string,
      description: PropTypes.string,
      isRentedPerDay: PropTypes.bool,
      dailyPrice: PropTypes.number,
      monthlyPrice: PropTypes.number
    }).isRequired
  ).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  rentals: state.rentals
});

export default connect(mapStateToProps)(RentalsList);

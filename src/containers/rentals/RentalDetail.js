import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from '../../actions';
import PageLoading from '../../components/page-loading/PageLoading';
import RentalInfo from '../../components/rental/RentalInfo';

const RentalDetail = ({ dispatch, rental, isFetchingRental }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchRentalById(id));
  }, [dispatch, id]);

  const { title, image } = rental;

  let template;

  if (isFetchingRental) {
    template = <PageLoading />;
  } else {
    template = (
      <div className="container">
        <section id="rentalDetails">
          <div className="upper-section">
            <div className="row">
              <div className="col-md-6">
                <img src={image} alt={title} />
              </div>
              <div className="col-md-6">
                <img src={image} alt={title} />
              </div>
            </div>
          </div>
          <div className="details-section">
            <div className="row">
              <div className="col-md-12">
                <RentalInfo rental={rental} />
              </div>
              <div className="col-md-4"> BOOKING</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return <div className="wrapper">{template}</div>;
};

RentalDetail.propTypes = {
  rental: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  isFetchingRental: PropTypes.bool.isRequired
};

const mapStateToProps = ({ rental: { item, isFetchingRental } }) => ({
  rental: item,
  isFetchingRental
});

export default connect(mapStateToProps)(RentalDetail);

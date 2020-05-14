import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRenters } from '../../actions';
import { addTableScript } from '../../utils/app-scripts';
import ContentTablePage from '../../components/content-templates/ContentTablePage';

const RentersList = ({ renters, dispatch }) => {
  const history = useHistory();

  useEffect(() => {
    addTableScript();
    dispatch(fetchRenters());
  }, [dispatch]);

  return (
    <>
      <ContentTablePage history={history}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renters.map(
            ({
              _id,
              title,
              firstname,
              lastname,
              category,
              phone: { home, mobile },
              email
            }) => (
              <tr key={_id}>
                <td>
                  <Link to={`/property/${_id}`}>{title}</Link>
                  <br />
                  <small>{category}</small>
                </td>
                <td>
                  {firstname}
                  ,
                  {lastname}
                </td>
                <td>
                  {mobile} 
                  {' '}
                  <br /> 
                  {' '}
                  {home}
                </td>
                <td> 
                  {' '}
                  {email}
                </td>
                <td>
                  <div className="action-buttons-wrapper">
                    <i className="fas fa-info-circle pms-text-renters" />
                    <i className="far fa-edit text-success" />
                    <i className="fas fa-trash text-danger" />
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </ContentTablePage>
    </>
  );
};
RentersList.propTypes = {
  renters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      phone: PropTypes.shape({
        home: PropTypes.string,
        mobile: PropTypes.string
      }),
      email: PropTypes.string
    }).isRequired
  ).isRequired,
  dispatch: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  renters: state.renters
});

export default connect(mapStateToProps)(RentersList);

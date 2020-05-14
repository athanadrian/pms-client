import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTableScript } from '../../utils/app-scripts';
import ContentTablePage from '../../components/content-templates/ContentTablePage';
import { fetchOwners } from '../../actions';

const OwnersList = ({ owners, dispatch }) => {
  const history = useHistory();

  useEffect(() => {
    addTableScript();
    dispatch(fetchOwners());
  }, [dispatch]);

  return (
    <ContentTablePage history={history}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Email</th>
          <th>AFM</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {owners.map(({ _id, title, category }) => (
          <tr key={_id}>
            <td>
              <Link to={`/owners/${_id}`}>{title}</Link>
              <br />
              <small>{category}</small>
            </td>
            <td>{category}</td>
            <td>TBD</td>
            <td> EBD</td>
            <td>
              <div className="action-buttons-wrapper">
                <i className="fas fa-info-circle pms-text-owners" />
                <i className="far fa-edit text-success" />
                <i className="fas fa-trash text-danger" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </ContentTablePage>
  );
};

OwnersList.propTypes = {
  owners: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string
    }).isRequired
  ).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  owners: state.owners
});

export default connect(mapStateToProps)(OwnersList);

import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addTableScript } from '../../utils/app-scripts';
import ContentTablePage from '../../components/content-templates/ContentTablePage';
import { rentersData } from '../../dev-data/data';

const PropertyList = () => {
  const history = useHistory();
  // const [properties, setProperties] = useState(rentersData);

  useEffect(() => {
    addTableScript();
  }, []);

  return (
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
        {rentersData.map(
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
  );
};

export default PropertyList;

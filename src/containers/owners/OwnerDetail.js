import React from 'react';
import { useHistory } from 'react-router-dom';
import ContentHeader from '../../components/content-templates/ContentHeader';

const OwnerDetail = () => {
  const history = useHistory();
  return (
    <>
      <ContentHeader history={history} />
    </>
  );
};

export default OwnerDetail;

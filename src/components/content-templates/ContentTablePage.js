import React from 'react';
import PropTypes from 'prop-types';
import ContentHeader from './ContentHeader';

const ContentTablePage = ({ children, history }) => {
  const title = history.location.pathname.slice(1);
  return (
    <>
      <ContentHeader history={history} />

      <section className="content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <table
                  id="entity-table"
                  className={`table table-bordered table-striped pms-table-text-${title}`}
                >
                  {children}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ContentTablePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  // eslint-disable-next-line react/require-default-props
  history: PropTypes.object
  // onClick: PropTypes.func.isRequired
};

export default ContentTablePage;

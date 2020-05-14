/* eslint-disable react/prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  PropertyIcon,
  ProjectIcon,
  OwnersIcon,
  RentersReverseIcon,
  EuroCircleIcon,
  ProfileIcon
} from '../../icons';
// import Button from '../button/Button';

const ContentHeader = ({
  history: {
    location: { pathname }
  },
  show
  // onClick
}) => {
  let title = '';
  let action = '';
  let breadcrumb = '';
  let Icon;
  [title, action] = pathname.slice(1).split('/');
  // TODO put Icon in front of title
  console.log('title', title);
  if (title === 'profile') {
    title = 'profiles';
  }
  console.log('title', title.slice(0, -1));

  switch (title.slice(0, -1)) {
    case 'propertie':
      Icon = PropertyIcon;
      break;
    case 'owner':
      Icon = OwnersIcon;
      break;
    case 'renter':
      Icon = RentersReverseIcon;
      break;
    case 'payment':
      Icon = EuroCircleIcon;
      break;
    case 'project':
      Icon = ProjectIcon;
      break;
    case 'expense':
      Icon = EuroCircleIcon;
      break;
    case 'profile':
      Icon = ProfileIcon;
      break;
    default:
      Icon = PropertyIcon;
      break;
  }

  if (action === 'add' || action === 'edit') {
    breadcrumb = action;
  } else {
    breadcrumb = 'Detail';
  }

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 list-title">
              {!action ? (
                <>
                  <Icon width={32} height={32} />
                  <h1 className={`ml-3 text-capitalize pms-text-${title}`}>
                    {title}
                  </h1>
                  {/* <Button
                  icon="add"
                  color="info" // {`pms-text-${title}`}
                  outline
                  type="button"
                  onClick={() => history.push(`/${title}/add`)}
                >
                  Add new
                </Button> */}
                  {show && (
                    <Link
                      className={`btn pms-btn-outline-${title} btn-sm`}
                      to={`/${title}/add`}
                    >
                      <i className="fas fa-plus mr-2" />
                      Add New
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Icon width={32} height={32} />
                  <h1 className={`ml-3 text-capitalize pms-text-${title}`}>
                    {` ${title} - ${breadcrumb}`}
                  </h1>
                </>
              )}
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">
                  <Link className={`text-capitalize pms-text-${title}`} to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  {action ? (
                    <Link
                      className={`text-capitalize pms-text-${title}`}
                      to={`/${title}`}
                    >
                      {title}
                    </Link>
                  ) : (
                    <span className="text-capitalize">{title}</span>
                  )}
                </li>
                {action && (
                  <li className="breadcrumb-item">
                    <span className="text-capitalize">{breadcrumb}</span>
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
ContentHeader.propTypes = {
  pathname: PropTypes.string,
  show: PropTypes.bool
  // onClick: PropTypes.func
};

ContentHeader.defaultProps = {
  pathname: '',
  show: true
};
export default ContentHeader;

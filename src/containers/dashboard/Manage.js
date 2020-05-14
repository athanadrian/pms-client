import React from 'react';
import SmallBox from '../../components/small-box/SmallBox';
import {
  OwnersIcon,
  RentersIcon,
  PropertyIcon,
  ProjectIcon,
  EuroCircleIcon
} from '../../icons';

const Manage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-6">
          <SmallBox
            count={30}
            title="Properties"
            type="property"
            icon={<PropertyIcon className="pms-icon" width={48} height={48} />}
            navigateTo="/"
          />
        </div>
        <div className="col-lg-3 col-6">
          <SmallBox
            count={5}
            title="Owners"
            type="owner"
            icon={<OwnersIcon className="pms-icon" width={48} height={48} />}
            navigateTo="/owners"
          />
        </div>
        <div className="col-lg-3 col-6">
          <SmallBox
            count={44}
            title="Renters"
            type="renter"
            icon={<RentersIcon className="pms-icon" width={48} height={48} />}
            navigateTo="/renters"
          />
        </div>
        <div className="col-lg-3 col-6">
          <SmallBox
            count={144}
            title="Payments"
            type="payment"
            icon={
              <EuroCircleIcon className="pms-icon" width={48} height={48} />
            }
            navigateTo="/"
          />
        </div>
        <div className="col-lg-3 col-6">
          <SmallBox
            count={53}
            title="Projects"
            type="project"
            icon={<ProjectIcon className="pms-icon" width={48} height={48} />}
            navigateTo="/"
          />
        </div>
        <div className="col-lg-3 col-6">
          <SmallBox
            count={65}
            title="Expenses"
            type="expense"
            icon={
              <EuroCircleIcon className="pms-icon" width={48} height={48} />
            }
            navigateTo="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Manage;

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  MaisonetteIcon,
  OfficeIcon,
  BuildingIcon,
  ApartmentIcon,
  LandIcon,
  WarehouseIcon,
  Complex1Icon,
  DashboardIcon,
  PropertyIcon,
  ProjectIcon,
  OwnersReverseIcon,
  // PropertiesContract,
  RentersReverseIcon,
  MapIcon1,
  EuroCircleIcon
} from '../../../icons';

const MenuSidebar = ({ username, isAuth }) => {
  const [toggleSubMenu, setToggleSubMenu] = useState('');

  const handleToggleSubMenu = () => {
    setToggleSubMenu(!toggleSubMenu);
  };

  return (
    <>
      {isAuth ? (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/" className="brand-link">
            <img
              src="/img/logo.png"
              alt="PropertyMS Logo"
              className="brand-image elevation-3"
              style={{ opacity: '.8' }}
            />
            <span className="brand-text font-weight-light">PropertyMS</span>
          </Link>
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  // src={user.picture || '/img/default-profile.png'}
                  src="/img/default-profile.png"
                  className="img-circle elevation-2"
                  alt="User"
                />
              </div>
              <div className="info">
                <Link to="/profile" className="d-block">
                  {username}
                </Link>
              </div>
            </div>
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <NavLink to="/dashboard" className="nav-link">
                    <DashboardIcon className="pms-sb-icon" />
                    <p>Dashboard</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  {/* TODO fetch properties isRental=true */}
                  <NavLink to="/" className="nav-link">
                    <i className="nav-icon fas fa-boxes" />
                    <p>Rentals</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/map" className="nav-link">
                    <MapIcon1 className="pms-sb-icon" />
                    <p>Map</p>
                  </NavLink>
                </li>
                <li
                  id="properties-sb-menu"
                  className={
                    !toggleSubMenu
                      ? 'nav-item has-treeview'
                      : 'nav-item has-treeview menu-open'
                  }
                >
                  <NavLink to="/properties" className="nav-link">
                    <PropertyIcon className="pms-sb-icon" />
                    <p>
                      Properties
                      <button
                        className="pms-toggle-button"
                        type="button"
                        onClick={handleToggleSubMenu}
                      >
                        <i className="right fas fa-angle-left" />
                      </button>
                    </p>
                  </NavLink>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to="/properties/building" className="nav-link">
                        <BuildingIcon className="pms-sb-icon" />
                        <p>Buildings</p>
                        <p className="badge right pms-box-properties">2</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/properties/apartment" className="nav-link">
                        <ApartmentIcon className="pms-sb-icon" />
                        <p>Apartments</p>
                        <p className="badge right pms-box-properties">12</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/properties/land" className="nav-link">
                        <LandIcon className="pms-sb-icon" />
                        <p>Land</p>
                        <p className="badge right pms-box-properties">32</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/properties/office" className="nav-link">
                        <OfficeIcon className="pms-sb-icon" />
                        <p>Offices</p>
                        <p className="badge right pms-box-properties">9</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/properties/maisonette" className="nav-link">
                        <MaisonetteIcon className="pms-sb-icon" />
                        <p>Maisonettes</p>
                        <p className="badge right pms-box-properties">14</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/properties/complex" className="nav-link">
                        <Complex1Icon className="pms-sb-icon" />
                        <p>Complexes</p>
                        <p className="badge right pms-box-properties">2</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/properties/warehouse" className="nav-link">
                        <WarehouseIcon className="pms-sb-icon" />
                        <p>Warehouses</p>
                        <p className="badge right pms-box-properties">1</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/owners" className="nav-link">
                    <OwnersReverseIcon
                      width={20}
                      height={20}
                      className="pms-sb-icon"
                    />
                    <p>Owners</p>
                    <p className="badge badge-info right pms-box-owners">2</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/renters" className="nav-link">
                    <RentersReverseIcon
                      width={20}
                      height={20}
                      className="pms-sb-icon"
                    />
                    <p>Renters</p>
                    <p className="badge badge-info right pms-box-renters">2</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/payments" className="nav-link">
                    <EuroCircleIcon
                      fill="#009688"
                      width={20}
                      height={20}
                      className="pms-sb-icon"
                    />
                    <p>Payments</p>
                    <p className="badge badge-info right pms-box-payments">2</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/projects" className="nav-link">
                    <ProjectIcon
                      width={20}
                      height={20}
                      className="pms-sb-icon"
                    />
                    <p>Projects</p>
                    <p className="badge badge-info right pms-box-projects">2</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/expenses" className="nav-link">
                    <EuroCircleIcon
                      fill="#c62f3e"
                      width={20}
                      height={20}
                      className="pms-sb-icon"
                    />
                    <p>Expenses</p>
                    <p className="badge badge-info right pms-box-expenses">2</p>
                  </NavLink>
                </li>
                <li className="nav-header">CONTRACTS</li>
                <li className="nav-item">
                  <NavLink to="/contracts/properties" className="nav-link">
                    {/* <PropertiesContract
              width={20}
              height={20}
              className="pms-sb-icon"
            /> */}
                    <i className="nav-icon fas fa-book" />
                    <p>Properties</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contracts/rentals" className="nav-link">
                    <i className="fas fa-circle nav-icon pms-text-properties" />
                    <p>Rentals</p>
                  </NavLink>
                </li>
                <li className="nav-header">STATISTICS</li>
                <li className="nav-item">
                  <NavLink to="/statistics/properties" className="nav-link">
                    <i className="fas fa-circle nav-icon pms-text-properties" />
                    <p>Properties</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/statistics/rentals" className="nav-link">
                    <i className="far fa-circle nav-icon pms-text-properties" />
                    <p>Rentals</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/statistics/payments" className="nav-link">
                    <i className="far fa-circle nav-icon pms-text-payments" />
                    <p>Payments</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/statistics/expenses" className="nav-link">
                    <i className="far fa-circle nav-icon pms-text-expenses" />
                    <p>Expenses</p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      ) : (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/" className="brand-link">
            <img
              src="/img/logo.png"
              alt="PropertyMS Logo"
              className="brand-image elevation-3"
              style={{ opacity: '.8' }}
            />
            <span className="brand-text font-weight-light">PropertyMS</span>
          </Link>
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  // src={user.picture || '/img/default-profile.png'}
                  src="/img/default-profile.png"
                  className="img-circle elevation-2"
                  alt="User"
                />
              </div>
              <div className="info">
                <Link to="/profile" className="d-block">
                  {username}
                </Link>
              </div>
            </div>
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  {/* TODO fetch properties isRental=true */}
                  <NavLink to="/" className="nav-link">
                    <i className="nav-icon fas fa-boxes" />
                    <p>Rentals</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/map" className="nav-link">
                    <MapIcon1 className="pms-sb-icon" />
                    <p>Map</p>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};

MenuSidebar.propTypes = {
  username: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = ({ auth: { username, isAuth } }) => ({
  username,
  isAuth
});

export default connect(mapStateToProps, null)(MenuSidebar);

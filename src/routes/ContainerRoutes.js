import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../pages/main/Main';
import Dashboard from '../containers/dashboard/Dashboard';
import OwnersList from '../containers/owners/OwnersList';
import OwnerDetail from '../containers/owners/OwnerDetail';
import OwnerAdd from '../containers/owners/OwnerAdd';
import RentersList from '../containers/renters/RentersList';
import PropertyList from '../containers/properties/PropertyList';
import RentalsList from '../containers/rentals/RentalsList';
import Profile from '../containers/profile/Profile';
import Map from '../containers/map/Map';
import RentalDetail from '../containers/rentals/RentalDetail';
import PrivateRoute from '../helpers/routes/PrivateRoute';

const ContainerRoutes = () => {
  return (
    <Main>
      <Switch>
        <PrivateRoute exact path="/">
          <RentalsList />
        </PrivateRoute>
        <PrivateRoute exact path="/rentals/:id">
          <RentalDetail />
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route exact path="/map">
          <Map />
        </Route>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <Route exact path="/properties">
          <PropertyList />
        </Route>
        <PrivateRoute exact path="/owners">
          <OwnersList />
        </PrivateRoute>
        <PrivateRoute exact path="/owners/add">
          <OwnerAdd />
        </PrivateRoute>
        <PrivateRoute path="/owners/:id">
          <OwnerDetail />
        </PrivateRoute>
        <PrivateRoute exact path="/renters">
          <RentersList />
        </PrivateRoute>
      </Switch>
    </Main>
  );
};

export default ContainerRoutes;

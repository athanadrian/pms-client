import React, { createContext, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import tt from '@tomtom-international/web-sdk-maps';
import { toast } from 'react-toastify';
// import * as ActionTypes from '../store/actions';

const MapContext = createContext(null);

export const MapProvider = ({ children, mapApiKey }) => {
  const cache = useRef({});

  // SAVE LOCATION TIO CACHE ON FIRST GET REQUEST
  // -Remove spaces and capital letters from location
  const normalizeLocation = (location) => {
    return location.replace(/\s/g, '').toLowerCase();
  };
  // -Save to cache
  const cacheLocation = (location, position) => {
    const locationKey = normalizeLocation(location);
    cache.current[locationKey] = position;
    return cache.current[locationKey];
  };
  // get from cache
  const getCachedLocation = (location) => {
    const locationKey = normalizeLocation(location);
    return cache.current[locationKey];
  };

  // INIT MAP
  const initMap = () => {
    const map = tt.map({
      key: mapApiKey,
      container: 'pms-map',
      style: 'tomtom://vector/1/basic-main',
      zoom: 15
    });
    map.addControl(new tt.NavigationControl());
    return map;
  };

  // SET CENTER MAP
  const setCenter = (map, position) => {
    map.setCenter(new tt.LngLat(position.lon, position.lat));
  };

  // ADD MARKER
  const addMarker = (map, position) => {
    const markerDiv = document.createElement('div');
    markerDiv.className = 'pms-user-marker';

    new tt.Marker({ element: markerDiv })
      .setLngLat([position.lon, position.lat])
      .addTo(map);
  };

  // ADD POPUP MESSAGE
  const addPopupMessage = (map, message) => {
    new tt.Popup({
      className: 'pms-popup',
      closeButton: false,
      closeOnClick: false
    })
      .setLngLat(new tt.LngLat(0, 0))
      .setHTML(`<p>${message}</p>`)
      .addTo(map);
  };

  const locationNotFound = () =>
    Promise.reject(toast.error(`Location not found!`));

  // GET GEO POSITION VIA GEOLOCATION
  const requestGeolocation = (location) => {
    return axios
      .get(
        `https://api.tomtom.com/search/2/geocode/${location}.JSON?key=${mapApiKey}`
      )
      .then((res) => res.data)
      .then((tomResults) => {
        const geoData = tomResults.results;
        if (geoData && geoData.length > 0) {
          const { position } = geoData[0];
          cacheLocation(location, position);
          return position;
        }
        return locationNotFound();
      })
      .catch(() => locationNotFound());
  };

  const getGeoPosition = (location) => {
    const cachedPosition = getCachedLocation(location);
    return cachedPosition
      ? Promise.resolve(cachedPosition)
      : requestGeolocation(location);
  };

  const mapApi = {
    initMap,
    getGeoPosition,
    setCenter,
    addMarker,
    addPopupMessage
  };

  return <MapContext.Provider value={mapApi}>{children}</MapContext.Provider>;
};

MapProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  mapApiKey: PropTypes.string.isRequired
};

export const useMap = () => {
  return useContext(MapContext);
};

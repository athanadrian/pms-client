import React, { useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { useMap } from '../../providers/MapProvider';

const TomMap = ({ location }) => {
  const map = useRef(null);
  const {
    initMap,
    getGeoPosition,
    setCenter,
    addMarker,
    addPopupMessage
  } = useMap();

  const getGeoLocation = useCallback(
    (loc) => {
      if (loc) {
        getGeoPosition(loc)
          .then((position) => {
            setCenter(map.current, position);
            addMarker(map.current, position);
          })
          .catch((error) =>
            addPopupMessage(map.current, `Location not found: ${error}`)
          );
      }
    },
    [getGeoPosition, map, setCenter, addMarker, addPopupMessage]
  );

  useEffect(() => {
    getGeoLocation(location);
  }, [location, getGeoPosition, getGeoLocation]);

  useEffect(() => {
    map.current = initMap();
  }, [initMap]);

  return <div id="pms-map" />;
};

TomMap.propTypes = {
  location: PropTypes.string
};

TomMap.defaultProps = {
  location: ''
};
export default TomMap;

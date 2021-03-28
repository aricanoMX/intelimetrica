import React, { useState, useRef, useCallback } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

import mapColors from 'Components/mapStyles';
import { StyledIndividualMap } from 'Styles/components/IndividualMapStyles';

export const IndividualMap = ({ name, street, city, state, lat, lng }) => {
  const [map, setMap] = useState(null);
  const [showMessage, setShowMessage] = useState(null);

  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: lat,
    lng: lng,
  };

  const options = {
    styles: mapColors,
    disableDefaultUI: true,
  };

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  });

  return (
    <StyledIndividualMap>
      <LoadScript googleMapsApiKey="AIzaSyDJlPRuTocB2swb6sNQq2NBz6-WKFW0o5Y">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
          options={options}
          onLoad={onMapLoad}
        >
          <Marker
            position={defaultCenter}
            onClick={() => {
              setShowMessage(defaultCenter);
            }}
          />
          {showMessage ? (
            <InfoWindow
              position={showMessage}
              onCloseClick={() => setShowMessage(null)}
            >
              <div>
                <h3>{name}</h3>
                <p>{`${street}, ${city}, ${state}.`}</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </LoadScript>
    </StyledIndividualMap>
  );
};

import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

import { useFetch } from 'Hooks/useFetch';

import { StyledReferences, LoadMap } from 'Styles/pages/ReferencesStyles';

export const References = () => {
  const { data } = useFetch();
  // const [directions, setDirections] = useState([]);

  const locations = data.map((data) => {
    return data.address.location;
  });
  // console.log(locations);

  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: 19.440057053713137,
    lng: -99.12704709742486,
  };

  return (
    <StyledReferences>
      <LoadMap googleMapsApiKey="AIzaSyDJlPRuTocB2swb6sNQq2NBz6-WKFW0o5Y">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={16.5}
          center={defaultCenter}
        >
          {locations.map((location) => (
            <Marker key={location.lat} position={location} />
          ))}
        </GoogleMap>
      </LoadMap>
      <div></div>
    </StyledReferences>
  );
};

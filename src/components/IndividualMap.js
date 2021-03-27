import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const { GoogleMap, LoadScript, Marker } = React.lazy(() =>
//   import('@react-google-maps/api')
// );
import { StyledIndividualMap } from 'Styles/components/IndividualMapStyles';

export const IndividualMap = ({ lat, lng }) => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: lat,
    lng: lng,
  };

  return (
    <StyledIndividualMap>
      <LoadScript googleMapsApiKey="AIzaSyDJlPRuTocB2swb6sNQq2NBz6-WKFW0o5Y">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </StyledIndividualMap>
  );
};

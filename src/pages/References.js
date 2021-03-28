import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

import { useFetch } from 'Hooks/useFetch';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

import {
  StyledReferences,
  LoadMap,
  ComboboxStyles,
} from 'Styles/pages/ReferencesStyles';
import mapColors from 'Components/mapStyles';
import '@reach/combobox/styles.css';

export const References = () => {
  const { data } = useFetch();
  const [showMessage, setShowMessage] = useState(null);

  const locations = data.map(({ id, name, contact, address, rating }) => {
    return { id, name, contact, address, rating };
  });

  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: 19.440057053713137,
    lng: -99.12704709742486,
  };

  const options = {
    styles: mapColors,
    disableDefaultUI: true,
  };

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const zoomTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  return (
    <StyledReferences>
      <LoadMap googleMapsApiKey="AIzaSyDJlPRuTocB2swb6sNQq2NBz6-WKFW0o5Y">
        <Search panTo={zoomTo} />
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
          options={options}
          onLoad={onMapLoad}
        >
          {locations.map(({ id, name, address }) => (
            <Marker
              key={id}
              position={address.location}
              onClick={() => {
                setShowMessage({ name, address });
              }}
            />
          ))}
          {showMessage ? (
            <InfoWindow
              position={showMessage.address.location}
              onCloseClick={() => setShowMessage(null)}
            >
              <div>
                <h3>{showMessage.name}</h3>
                <p>{`${showMessage.address.street}, ${showMessage.address.city}, ${showMessage.address.state}.`}</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </LoadMap>
      <div></div>
    </StyledReferences>
  );
};

const Search = ({ panTo }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 19.440057053713137,
        lng: () => -99.12704709742486,
      },
      radius: 200 * 1000,
    },
  });

  return (
    <ComboboxStyles>
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            console.log(lat, lng);
            panTo({ lat, lng });
          } catch (error) {
            console.log('error!');
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(event) => setValue(event.target.value)}
          disabled={!ready}
          placeholder="Enter an address and find awesome restaurants"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </ComboboxStyles>
  );
};

import React, { useState } from 'react';

import { IndividualMap } from './IndividualMap';

import {
  StyledCards,
  CardContainer,
  InfoContainer,
  MapShareContainer,
} from 'Styles/components/CardsStyles';

export const Cards = ({ filteredRestaurants }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <StyledCards>
      {filteredRestaurants.map(({ id, name, contact, address, rating }) => (
        <CardContainer key={id} state={showInfo} onClick={handleClick}>
          <InfoContainer>
            <h1>{name}</h1>
            <p>{rating}</p>
            <br />
            <p>
              Web Page: &nbsp;{' '}
              <a href={contact.site} target="_blank" rel="noopener">
                {contact.site}
              </a>
            </p>
            <p>
              Email: &nbsp;
              <a href={`mailto:${contact.email}`} rel="noopener">
                {contact.email}
              </a>
            </p>
            <p>Phone: &nbsp;{contact.phone}</p>
            <br />
            <p>
              {address.street}, {address.city}, {address.state}.
            </p>
          </InfoContainer>
          <MapShareContainer>
            <IndividualMap
              name={name}
              street={address.street}
              city={address.city}
              state={address.state}
              lat={address.location.lat}
              lng={address.location.lng}
            />
            <p>botonoes de share</p>
          </MapShareContainer>
        </CardContainer>
      ))}
    </StyledCards>
  );
};

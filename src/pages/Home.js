import React, { useState, useMemo, useRef } from 'react';

import { useFetch } from 'Hooks/useFetch';
import { IndividualMap } from 'Components/IndividualMap';

import { StyledHome } from 'Styles/pages/HomeStyles';
import {
  StyledCards,
  CardContainer,
  InfoContainer,
  MapShareContainer,
  NetworkContainer,
  FSButton,
  FIcon,
} from 'Styles/components/CardsStyles';
import { StyledInput } from 'Styles/components/InputStyles';

export const Home = () => {
  const { data } = useFetch();
  const [search, setSearch] = useState('');
  const [option, setOption] = useState('');
  const searchInput = useRef(null);

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  const filteredRestaurants = useMemo(
    () =>
      data.filter(({ name }) => {
        return name.toLowerCase().includes(search.toLowerCase());
      }),
    [data, search]
  );

  const handleChange = (event) => {
    switch (event.target.value) {
      case 'nameASC':
        filteredRestaurants
          .sort((prev, next) => {
            if (prev.name < next.name) {
              return 1;
            } else if (prev.name > next.name) {
              return -1;
            } else {
              return 0;
            }
          })
          .reverse();
        break;
      case 'nameDESC':
        filteredRestaurants.sort((prev, next) => {
          if (prev.name < next.name) {
            return 1;
          }
          if (prev.name > next.name) {
            return -1;
          }
          return 0;
        });
        break;
      case 'ratingASC':
        filteredRestaurants.sort((prev, next) => prev.rating - next.rating);
        break;
      case 'ratingDESC':
        filteredRestaurants
          .sort((prev, next) => prev.rating - next.rating)
          .reverse();
    }
    setOption({ value: event.target.value });
  };

  return (
    <StyledHome>
      <StyledInput>
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            value={search}
            ref={searchInput}
          />
          <select value={option} onChange={handleChange}>
            <option value={null}>Select Order... </option>
            <option value="nameASC">Order by: Name ⬇</option>
            <option value="nameDESC">Order by: Name ⬆ </option>
            <option value="ratingASC">Order by: Rating ⬇ </option>
            <option value="ratingDESC">Order by: Rating ⬆ </option>
          </select>
        </div>
      </StyledInput>

      <StyledCards>
        {filteredRestaurants.map(({ id, name, contact, address, rating }) => (
          <CardContainer key={id}>
            <InfoContainer>
              <h1>{name}</h1>
              <p>{rating}</p>

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
              <NetworkContainer>
                <FSButton url={contact.site}>
                  <p>Share &nbsp;</p>
                  <FIcon
                    logofillcolor="white"
                    round={true}
                    height="24px"
                    width="24px"
                  />
                </FSButton>
                {/* <FacebookProvider>
                <ShareButton href="http://www.fb.com">Like </ShareButton>
              </FacebookProvider> */}
              </NetworkContainer>
            </MapShareContainer>
          </CardContainer>
        ))}
      </StyledCards>
    </StyledHome>
  );
};

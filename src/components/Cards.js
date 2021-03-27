import React from 'react';
import { Link } from 'react-router-dom';

import { IndividualMap } from './IndividualMap';

import {
  StyledCards,
  CardContainer,
  InfoContainer,
  MapShareContainer,
} from 'Styles/components/CardsStyles';

export const Cards = ({ filteredRestaurants }) => {
  return (
    <StyledCards>
      {filteredRestaurants.map(({ id, name, contact, address, rating }) => (
        <CardContainer key={id}>
          <InfoContainer>
            <h1>{name}</h1>
            <p>{rating}</p>
            <br />
            <p>
              Pagina web: &nbsp;{' '}
              <a href={contact.site} target="_blank" rel="noopener">
                {contact.site}
              </a>
            </p>
            <p>
              Correo: &nbsp;
              <a href={`mailto:${contact.email}`} rel="noopener">
                {contact.email}
              </a>
            </p>
            <p>Teléfono: &nbsp;{contact.phone}</p>
            <br />
            <p>
              {address.street}, {address.city}, {address.state}.
            </p>
            {/* <p>{address.location.lat}</p>
            <p>{address.location.lng}</p> */}
          </InfoContainer>
          <MapShareContainer>
            <IndividualMap
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

export const LazyCards = () => {
  const [showNewCards, setShowNewCards] = useState(false);

  useEffect(() => {
    const onChange = (entries) => {
      console.log(entries);
      const element = entries[0];
      console.log(element);
    };
    const observer = new IntersectionObserver(onchange, {
      rootMargin: '100px',
    });

    observer.observe(document.getElementById('LazyCards'));
    return <div id="LazyCards">{showNewCards ? <Cards /> : null}</div>;
  }, []);
};

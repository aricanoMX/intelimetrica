import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'Assets/Logo.png';

import { StyledHeader } from 'Styles/components/HeaderStyles';

export const Header = ({ setState }) => {
  const handleOpen = () => {
    setState('true');
  };

  return (
    <StyledHeader>
      <button onClick={handleOpen}>
        <img
          src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/menu-24px.svg"
          alt="burger-menu"
        />
      </button>
      <Link to="/">
        <picture>
          <img src={Logo} alt="Logo Melp" />
        </picture>
      </Link>
      <nav>
        <li>
          <Link to="/References">
            <p>All Markers</p>
          </Link>
        </li>
        <li>
          <Link to="/Recomendations">
            <p>Recomendations</p>
          </Link>
        </li>
      </nav>
    </StyledHeader>
  );
};

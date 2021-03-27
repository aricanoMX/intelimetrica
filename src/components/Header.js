import React from 'react';

import Logo from 'Assets/Logo.png';

import { StyledHeader } from 'Styles/components/HeaderStyles';

export const Header = () => {
  return (
    <StyledHeader>
      <picture>
        <img src={Logo} alt="Logo Melp" />
      </picture>
    </StyledHeader>
  );
};

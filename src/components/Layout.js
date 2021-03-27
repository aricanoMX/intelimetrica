import React from 'react';

import { StyledLayout } from 'Styles/components/LayoutStyles';
import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};

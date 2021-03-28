import React, { useState } from 'react';

import { StyledLayout } from 'Styles/components/LayoutStyles';
import { Header } from './Header';

import { Sidebar } from 'Components/Sidebar';

export const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState('');

  const handleClose = () => {
    sidebar === 'true' ? setSidebar('false') : null;
  };

  return (
    <StyledLayout onClick={handleClose}>
      <Header setState={setSidebar} />
      <Sidebar openState={sidebar} setState={setSidebar} />
      {children}
    </StyledLayout>
  );
};

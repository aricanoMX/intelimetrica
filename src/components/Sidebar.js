import React from 'react';
import { Link } from 'react-router-dom';

import {
  SidebarStyle,
  SidebarHeader,
  Navbar,
} from 'Styles/components/SidebarStyles';

import Logo from 'Assets/Logo.png';
import PinDrop from 'Assets/pin_drop.svg';
import Restaurant from 'Assets/restaurant.svg';

export const Sidebar = ({ openState, setState }) => {
  const handleState = () => {
    setState('false');
  };

  return (
    <SidebarStyle state={openState} onClick={handleState}>
      <SidebarHeader>
        <Link to="/">
          <img src={Logo} alt="Logo Melp" />
        </Link>
      </SidebarHeader>
      {/* <hr /> */}
      <Navbar>
        <li>
          <Link to="/References">
            <img src={PinDrop} alt="burger-menu" />
            <span>All Markers</span>
          </Link>
        </li>
        <li>
          <Link to="/Recomendations">
            <img src={Restaurant} alt="burger-menu" />
            <span>Recomendations</span>
          </Link>
        </li>
      </Navbar>
      {/* <hr /> */}
    </SidebarStyle>
  );
};

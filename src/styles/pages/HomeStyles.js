import styled from 'styled-components';
import { devices, sizes, palette } from 'Styles/GlobalStyles';

export const StyledHome = styled.main`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    'input'
    'main';
  @media ${devices.breakpointsTablet} {
    grid-template-rows: 62.5px 1fr;
  }
  @media ${devices.breakpointsDesktop} {
    grid-template-rows: 75px 1fr;
  }
`;

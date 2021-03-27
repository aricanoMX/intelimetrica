import styled from 'styled-components';
import { devices, sizes, palette } from 'Styles/GlobalStyles';

export const StyledHome = styled.main`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    'input'
    'main';
`;

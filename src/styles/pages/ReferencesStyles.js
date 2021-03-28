import styled from 'styled-components';
import { devices, sizes, palette } from 'Styles/GlobalStyles';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const StyledReferences = styled.main`
  display: grid;
  grid-template-rows: 0px 50% 50%;
  grid-template-areas:
    'all-tags'
    'recomendations';
`;
export const LoadMap = styled(LoadScript)`
  height: 50vh;
  /* grid-area: all-tags;
  border-radius: 1rem; */
`;

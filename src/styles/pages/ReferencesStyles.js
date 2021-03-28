import styled from 'styled-components';
import { devices, sizes, palette } from 'Styles/GlobalStyles';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const StyledReferences = styled.main`
  display: flex;
  flex-direction: column;
  /* display: grid;
  grid-template-rows: 0px 50% 50%;
  grid-template-areas:
    'all-tags'
    'recomendations'; */
  padding-bottom: 1rem;
`;
export const LoadMap = styled(LoadScript)`
  /* height: 50vh; */
  /* grid-area: all-tags;
  border-radius: 1rem; */
`;

export const ComboboxStyles = styled.div`
  position: absolute;
  top: 4rem;
  left: 62.5%;
  transform: translateX(-50%);
  width: 100%;
  height: 25px;
  max-width: 300px;
  z-index: 9;
`;

import styled from 'styled-components';
import { devices, sizes, palette } from 'Styles/GlobalStyles';

export const StyledCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem 1rem 0 0;
  padding: 0.5rem 0.5rem 0 0.5rem;
  overflow-y: auto;
  gap: 1rem 0;
`;
export const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  height: 160px;
  /* max-height: 160px; */
  border-radius: 1rem;
  background-color: ${palette.whiteColorAlpha};
`;
export const InfoContainer = styled.div`
  font-size: 0.5rem;
  padding: 0.5rem;
  display: inherit;
  align-items: center;
  & h1 {
    font-size: 1rem;
  }
  & a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  & p {
    display: flex;
  }
`;
export const MapShareContainer = styled.div`
  /* font-size: 0.5rem; */
  padding: 0.5rem;
  display: inherit;
  grid-template-rows: 75% 25%;
  align-items: center;

  & h1 {
    font-size: 1rem;
  }
  & a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  & p {
    display: flex;
  }
`;

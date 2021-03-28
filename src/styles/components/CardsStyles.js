import styled, { css } from 'styled-components';
import { devices, sizes, palette } from 'Styles/GlobalStyles';

export const LazyStyles = styled.div``;

export const StyledCards = styled.div`
  grid-area: main;
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
  border-radius: 1rem;
  background-color: ${palette.whiteColorAlpha};
  box-shadow: 0.0625rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5);
  ${(props) =>
    props.state === 'true' &&
    css`
      height: 160px;
    `};
  ${(props) =>
    props.state === 'false' &&
    css`
      height: 4.25rem;
    `};
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
  padding: 0.5rem;
  display: inherit;
  grid-template-rows: 75% 25%;
  grid-template-areas:
    'maps'
    'share';
`;
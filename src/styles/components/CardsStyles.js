import styled, { css } from 'styled-components';
import { devices, sizes, palette } from 'Styles/GlobalStyles';

import { FacebookShareButton, FacebookIcon } from 'react-share';

export const StyledCards = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem 1rem 0 0;
  padding: 0.5rem 0.5rem 0 0.5rem;
  overflow-y: auto;
  gap: 1rem 0;
  @media ${devices.breakpointsTablet} {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 8.5rem;
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
  @media ${devices.breakpointsTablet} {
    height: 12rem;
    /* grid-template-columns: repeat(3, 1fr); */
  }
  @media ${devices.breakpointsDesktop} {
  }
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
  @media ${devices.breakpointsTablet} {
    p {
      /* display: flex; */
      align-items: center;
      font-size: 0.55rem;
    }
  }
  @media ${devices.breakpointsDesktop} {
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

export const NetworkContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
`;

export const FSButton = styled(FacebookShareButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    font-size: 0.75rem;
  }
`;
export const FIcon = styled(FacebookIcon)``;

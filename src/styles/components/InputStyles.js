import styled from 'styled-components';
import { devices, sizes, palette } from 'Styles/GlobalStyles';

export const StyledInput = styled.div`
  grid-area: input;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 3.125rem;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    height: 75%;
    width: 80%;
    background: ${palette.whiteColorAlpha};
    box-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25);
    padding: 0 5%;
    & input {
      width: 100%;
      background: none;
      border: none;
      outline: none;
      font-size: 0.75rem;
    }
    & select {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 0.75rem;
      & :focus {
        border-radius: 1rem;
      }
      & option {
        font-size: 0.75rem;
      }
    }
  }
  @media ${devices.breakpointsTablet} {
    height: 3.5rem;
    & div {
      width: 70%;
      border-radius: 1rem;
      & input {
        font-size: 1.125rem;
      }
    }
  }
  @media ${devices.breakpointsDesktop} {
    & ::-webkit-scrollbar {
      display: none;
    }
  }
`;

import styled from 'styled-components';
import { devices, sizes, palette } from 'Styles/GlobalStyles';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  & a {
    width: 25%;
    & picture {
      filter: drop-shadow(0 0.0625 0.125rem #ffd899);
      transform: translateY(0.5rem);
      height: 100%;
      & img {
        height: 100%;
      }
    }
  }
  & button {
    position: absolute;
    background: transparent;
    outline: none;
    cursor: pointer;
    top: 1rem;
    left: 1rem;
    border: none;
  }
  & nav {
    display: none;
  }
  @media ${devices.breakpointsTablet} {
    & a {
      & picture {
        transform: translateY(1rem);
        height: 100%;
        & img {
          height: 100%;
        }
      }
    }
    & button {
      top: 1.5rem;
      left: 1.5rem;
      & img {
        height: 2.125rem;
        width: 2.125rem;
      }
    }
  }
  @media ${devices.breakpointsDesktop} {
    & a {
      & picture {
        transform: translateY(1rem);
        height: 100%;
        & img {
          height: 200%;
        }
      }
    }
    & button {
      display: none;
    }
    & nav {
      display: flex;
      position: absolute;
      right: 3rem;
      top: 5%;
      width: 20%;
      & li {
        width: 100%;
        list-style: none;
        & :nth-of-type(2) {
          opacity: 0.15;
        }
        & a {
          width: 100%;
          font-weight: bold;

          & :active {
            color: black;
          }
        }
      }
    }
  }
`;

import styled, { css, keyframes } from 'styled-components';
import { palette, devices, sizes } from 'Styles/GlobalStyles';

import Bg from 'Assets/MidBg.svg';

const intoScreen = ({ time = '0.5s', type = 'ease-in-out' } = {}) => css`
  animation: ${time} ${intoFrames} ${type} forwards;
`;

const intoFrames = keyframes`
  from {
    /* width: 0; */
    margin-left: -100%;
    opacity: 0;
    visibility: hidden;
    
  }
  to{
    /* width: 100%; */
    margin-left: 0;
    opacity: 1;
    visibility: visible;
  }
`;

const outScreen = ({ time = '0.5s', type = 'ease-in-out' } = {}) => css`
  animation: ${time} ${outFrames} ${type} forwards;
`;

const outFrames = keyframes`
  from {
    margin-left: 0;
    opacity: 1;
    visibility: visible;
  }
  to {
    margin-left: -100%;
    opacity: 0;
    visibility: hidden;
  }
`;

export const SidebarStyle = styled.section`
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 50vw;
  padding-top: 1rem;
  background-color: #ffece6;
  background-image: url(${Bg});
  background-position: center center;
  background-size: cover;
  border-radius: 0 1rem 1rem 0;
  border-right: 2px solid rgba(0, 0, 0, 0.5);
  ${(props) =>
    props.state === '' &&
    css`
      margin-left: -50vw;
    `}
  ${(props) =>
    props.state === 'true' &&
    css`
      ${intoScreen()};
    `};
  ${(props) =>
    props.state === 'false' &&
    css`
      ${outScreen()};
    `};
  & hr {
    width: 90%;
    opacity: 0.2;
    margin: 0.25rem 0;
    height: 1px;
  }

  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
    display: none;
  }
`;

export const BtnClose = styled.button`
  opacity: 1;
  visibility: visible;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  padding: 0 0.5rem;
  & img {
    width: inherit;
    height: inherit;
  }
`;

export const Navbar = styled.ul`
  width: 90%;
  & li {
    padding: 0.5rem;
    list-style: none;
    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${palette.firstTextColor};
      gap: 0 0.25rem;
      & :hover {
        font-weight: bold;
      }
      & span {
      }
    }
    & :last-child {
      opacity: 0.1;
    }
  }
  @media ${devices.breakpointsTablet} {
    & li {
      & a {
        gap: 0 0.5rem;
        & span {
          font-size: 1.75rem;
        }
      }
    }
  }
  @media ${devices.breakpointsDesktop} {
    display: none;
  }
`;

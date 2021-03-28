import styled from 'styled-components';
import { devices, sizes } from 'Styles/GlobalStyles';

// import Fondo from 'Assets/fondo.svg';
import BG from 'Assets/BG.svg';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 100vh;
  background-color: #ffece6;
  background-image: url(${BG});
  background-size: 100% no-repeat;
  & main {
    width: 100%;
    margin: 0 auto;
    padding: 1rem 1rem 0;
    overflow-y: auto;
    & ::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${devices.breakpointsTablet} {
    grid-template-rows: 75px 1fr;
    & main {
      padding: 1.5rem 2.5rem 0;
    }
  }
  @media ${devices.breakpointsDesktop} {
    & main {
      padding: 4.5rem 4.5rem 0rem;
      max-width: ${sizes.desktop};
    }
  }
`;

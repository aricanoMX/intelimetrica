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
`;

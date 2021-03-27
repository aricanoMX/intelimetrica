import styled from 'styled-components';
import { devices, sizes, palette } from 'Styles/GlobalStyles';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  & picture {
    filter: drop-shadow(0 0.0625 0.125rem #ffd899);
    transform: translateY(0.5rem);
    height: 100%;
    & img {
      height: 100%;
    }
  }
`;

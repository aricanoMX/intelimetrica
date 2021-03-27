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
    height: 50%;
    max-width: 80%;
    /* border: 1px solid red; */
    background: ${palette.whiteColorAlpha};
    gap: 0 1px;
    & input {
      background: none;
      border: none;
      margin: 0 auto;
      outline: none;
      padding-left: 5%;
      font-size: 0.75rem;
    }
    & a {
      display: inherit;
      align-items: inherit;
      justify-content: inherit;
      font-size: 0.75rem;
      width: 3rem;
      background: none;
      border: none;
      margin: 0 auto;
      text-decoration: none;
      height: 100%;
      border-left: 0.125rem solid #ffecef;
      & :hover {
        color: ${palette.firstTextColorAlpha};
      }
      & :active {
        background: ${palette.dividerColorAlpha};
        font-weight: bold;
        & :last-child {
          border-radius: 0 0.5rem 0.5rem 0;
        }
      }
    }
  }
`;

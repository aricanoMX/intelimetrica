import { createGlobalStyle } from 'styled-components';

export const palette = {
  firstColor: ``,
  firstColorAlpha: `rgba()`,
  secondColor: ``,
  secondColorAlphaColor: `rgba()`,
  fistTitleColor: ``,
  secondTitleColor: ``,
  firstTextColor: `#212121`,
  firstTextColorAlpha: `rgba(33,33,33,0.75)`,
  secondTextColor: `#757575`,
  dividerColor: `#bdbdbd`,
  dividerColorAlpha: `rgba(189, 189, 189, 0.75)`,
  whiteColor: `#fff`,
  whiteColorAlpha: `rgba(255,255,255,0.75)`,
};

export const fonts = {
  font: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
};
export const sizes = {
  mobile: `375px`,
  tablet: `768px`,
  desktop: `1024px`,
};
export const devices = {
  breakpointsMobile: `(min-width: ${sizes.mobile})`,
  breakpointsTablet: `(min-width: ${sizes.tablet})`,
  breakpointsDesktop: `(min-width: ${sizes.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
*,
&::after,
&::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  height: 100vh;
  box-sizing: border-box;
  font-family: ${fonts.font};
  scroll-behavior: smooth;
  & body {
    margin: 0;
    overflow-x: hidden;
    & a {
      display: block;
      text-align: center;
      text-decoration: none;
      transition: all 0.5 ease-out;
      & :hover{
      opacity: 0.75;
      }
    }
    & img {
      max-width: 100%;
      height: auto;
    }
  }
}
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  min-height: 100%;
}

body {
  margin: 0;
  color: ${(props) => props.theme.colorMainForText};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  font-weight: 400;
  font-family: ${(props) => props.theme.fontFamily};
  min-height: 100vh;
}

a {
  text-decoration: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
`;

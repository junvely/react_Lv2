import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --theme-color-lightGray: #ccc;
    --theme-color-gray: #696969;
    --theme-color-lightGreen: #64dc95;
    --theme-color-green: #17d164;
    --theme-color-lightNavy: #6736ed94;
    --theme-color-navy: #6836ed;
  }

 * {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans KR", sans-serif;
}

body {
  background-color: #dae0f6;
}

ul,
li {
  list-style: none;
}

button,
input {
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}

`;

export default GlobalStyle;

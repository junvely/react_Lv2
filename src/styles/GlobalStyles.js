import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

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

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, Sans-Serif;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0.03em;
  background-color: #f7f7f7;
  color: #545454;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}
img {
  display: block;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;

export default GlobalStyle;

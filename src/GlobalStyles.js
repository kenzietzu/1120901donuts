import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  background-color: #ffffff;
  color: #151515;
}
h1,h2,h3,h4,h5,h6{
  font-family: 'Bai Jamjuree', sans-serif;
  margin: 0;
  padding: 0;
}
a{
  color: inherit;
  text-decoration:none;
}
h1{
  font-size: 50px;
}

html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}

`;

export default GlobalStyles;

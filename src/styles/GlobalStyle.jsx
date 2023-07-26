import { createGlobalStyle } from "styled-components";
import "./font/Universe.css";




const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
 body {
    font-family: 'universe', serif;
    margin:0;
    padding:0;
  }

  

`;

export default GlobalStyle;
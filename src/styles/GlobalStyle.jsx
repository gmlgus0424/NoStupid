import { createGlobalStyle } from "styled-components";
import "./font/Universe.css";

//모바일 safari에서 vh를 결정할 때 일부 ui 무시하는 버그가 있어 vh 계산 커스텀
//(1)js에서 innerHeight에 0.01 곱하여 새로운 vh단위 구함
//(2) setProperty를 이용해 새롭게 구한 vh값을 —-vh 변수에 담는다

function setScreenSize(){
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();

//브라우저 사이즈가 변경 될때마다 자동으로 --vh의 크기 변경해주기
window.addEventListener('resize', setScreenSize);



const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
 body {
    font-family: 'universe', serif;
    margin:0;
    padding:0;
  }

  :root {
    --vh : 100%
  }

`;

export default GlobalStyle;
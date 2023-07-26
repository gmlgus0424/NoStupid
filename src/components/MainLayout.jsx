import StyleSheet from "styled-components";



const StyledMain =styled.div`
position: relative;
max-width: 768px;
height: 100vh;
margin: 0 auto;
`;

const MainLayout =({children})=>{
  return <StyledMain>{children}</StyledMain>;
};

export default MainLayout;
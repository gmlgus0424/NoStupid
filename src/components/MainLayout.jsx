import React from 'react';
import styled from 'styled-components';



const StyledMain =styled.div`
width : 100%;
max-width: 430px;
margin : auto;
min-height: 100vh;
background: black;
`;

function StyledMain({children }){
  return <StyledMain>{children}</StyledMain>;
}

export default MainLayout;
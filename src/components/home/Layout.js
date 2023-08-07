import styled from 'styled-components'


/* home Layout */
const Layout= styled.div`
    width: 100%;
    max-width: 430px;
    margin : auto;
    min-height: 100vh;

    background :${({ theme }) => theme.colors.background};

`;


export default Layout;


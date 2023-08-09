import styled from 'styled-components';

export const Header= styled.h1`
${({ theme }) => theme.font24}
color: ${({theme})=> theme.black};


line-height: 29px;
display: flex;
margin-top: 63px;
margin-bottom : 18px;
`

export const SubHeader= styled.p`
${({theme})=>theme.font24}
color : ${({theme})=>theme.black};
line-height :29px;
`

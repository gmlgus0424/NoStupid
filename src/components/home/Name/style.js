import styled from 'styled-components';

export const Header= styled.h1`
${({ theme }) => theme.fonts.font24}
color: ${({theme})=> theme.colors.black};


line-height: 29px;
display: flex;
margin-top: 63px;
margin-bottom : 18px;
`

export const SubHeader= styled.p`
${({theme})=>theme.fonts.font24}
color : ${({theme})=>theme.colors.black};
line-height :29px;
`

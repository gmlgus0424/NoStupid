import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react';
import logo from '../assets/icon/no_stupid.svg';

import { KAKAO_AUTH_URL } from '../api/KakaoLogin';




const Container= styled.div`
padding : 20px 16px 56px 16px;
width : 100%;
display : flex;
height: calc(var(--vh, 1vh) * 100);
flex-directio : column;
justify-content: space-between;

input{
  width: 100%;
  padding : 15px 2px; 
  border-radius : 10px;
  margin-bottom: 14px;
 border-width :1px;
 border-color: grey;

input::placeholder{
  color:#949494;
  font-size : 16px;
}
input:focus {
  border-color: black; 
}`;


const LogoBox = styled.div`
`;

const LoginArea = styled.div`
width: 100%;
`;
const LoginWrapper = styled.div`
display : block;
width : 100%;
outline-style:grey solid 1px ;

`;
const EmailInput= styled.input `
display: block;
width: 100%;
height : 16px;

&::placeholder {
  color: ##949494;
  font-size : 16px;
}
&:focus {
  color: black;
}
`;

const ErrorAlter = styled.span`
display:inline-block;
font-size: 12px;
color :  #ff003e;
letter-spacing: -.5px;
vertical-align: middle;
`;
const PasswordWrapper= styled.div`
display : block;
width : 100%;
`;

const PasswordInput = styled.input`
display: block;
width: 100%;
height : 16px;
&::placeholder {
  color: ##949494;
  font-size : 16px;
}
&:focus {
  color: black;
}
`;
const LoginButton = styled.button`
margin-top:25px;
font-weight: 600;
color: #ffffff;
font-size: 14px;
background-color:#ACABAB;
border-radius : 10px;
transition: all 300ms ease-in-out;
padding: 15px 0;
width: 100%;
font-size: 14px;
border:0 solid black;

`;

const KakaoLoginButton = styled.a`
  background-color: yellow;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 40px;
  cursor: pointer;
  border-radius: 5px;
`;




function Login(){
 const {register, handleSubmit ,formState:{errors}}=useForm();
  //결과값을 표시할 result로 가지고옴
const [result,setResult]=useState('');



const onSubmit =(data)=>{
    setResult(JSON.stringify(data));
}

  return (
    <Container>
    <LogoBox>
      <img src={logo} alt="no_stupid"/>
    <LoginArea>
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginWrapper>
     <EmailInput 
        type="email"
     {...register("email",{
      required:true,
      pattern : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
     })} placeholder='E-mail'/>
     {
      errors.email?.type ==='required' && (<ErrorAlter>반드시 이메일을 입력하여주세요</ErrorAlter>)
     }
     {
      errors.email?.type ==='pattern' && (<ErrorAlter>올바르게 입력해주세요</ErrorAlter>)
     }
</LoginWrapper>

<PasswordWrapper>
     <PasswordInput type ="password" 
     {...register("password",{
      required : true,
      minLength: {
        value: 6
       
      },
     })} placeholder="password"/> 
     {
      errors.password?.type==='required' && (<ErrorAlter>비밀번호를 입력해주세요</ErrorAlter>)
     }
     {
      errors.password?.type==='minLength' && (<ErrorAlter>최소 6자 이상 입력해주세요</ErrorAlter>)}
    </PasswordWrapper>
     <LoginButton type="submit">LOGIN</LoginButton>
      
    </form>
 <KakaoLoginButton href={ KAKAO_AUTH_URL }>카카오로 로그인</KakaoLoginButton>

    </LoginArea>
    </LogoBox>
    </Container>


  
  )
};

export default Login;

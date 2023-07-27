import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react';
import logo from '../assets/icon/no_stupid.svg';

const Container= styled.div`
padding : 20px 16px 56px 16px;
width : 100%;
display : flex;
height: calc(var(--vh, 1vh) * 100);
flex-directio : column;
justify-content: space-between;
input{
  width: 100%;
  height: 44px;
  outline : 1px solid #949494;
  border-radius : 10px;
  
}


`;



const LogoBox = styled.div``;
const LoginArea = styled.div``;
const LoginWrapper = styled.div``;
const PasswordWrapper= styled.div``;
const LoginButton = styled.div``;
const KakaoLoginBtn= styled.a``;




function Login(){
 const {register, handleSubmit, watch,formState:{errors}}=useForm();
  //결과값을 표시할 result로 가지고옴
const [result,setResult]=useState('');

const watchemail= watch('email','');

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
     <input type="email"
     {...register("email",{
      required:true,
      pattern : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
     })} placeholder='E-mail'/>
     {
      errors?.type==='required' && <p>반드시 이메일을 입력하여주세요</p>
     }
     {
      errors?.type==='pattern' && <p>올바르게 이메일을 입력해주세요 </p>
     }
</LoginWrapper>
<PasswordWrapper>
     <input type ="password" 
     {...register("password",{
      required : true,
      minLength: {
        value: 6
       
      },
     })} placeholder="password"/> 
     {
      errors?.type==='required' && <p>비밀번호를 입력하세요.</p>
     }
     {
      errors?.type==='minLength' && <p>최소 6자 이상의 비밀번호를 입력해주세요</p>
     }
    </PasswordWrapper>
     <LoginButton type="submit">로그인</LoginButton>
      
          <p>{watchemail}</p>
   
    </form>
    <KakaoLoginBtn>카카오로그인</KakaoLoginBtn>
    </LoginArea>
    </LogoBox>
    </Container>
  )
};

export default Login;

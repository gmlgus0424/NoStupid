import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react';

const LoginArea = styled.div``;
function Login(){
 const {register, handleSubmit, watch,formState:{errors}}=useForm();
  //결과값을 표시할 result로 가지고옴
const [result,setResult]=useState('');

const watchemail= watch('email','');

const onSubmit =(data)=>{
    setResult(JSON.stringify(data));
 }

  return (
    <LoginArea>
    <form onSubmit={handleSubmit(onSubmit)}>
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
    
     <input type="submit"/>
      
          <p>{watchemail}</p>
   
    </form>
    </LoginArea>
  )
};

export default Login;

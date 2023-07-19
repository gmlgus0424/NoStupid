import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import styled from 'styled-components';


const Container = styled.div`
  position: relative;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  padding: 0px 23px;
`;































function Login({
  onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1_000));
    alert(JSON.stringify(data));
  }
})

{
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors }
  } = useForm();


  return (

      
        
          
 

    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="text"
        placeholder="test@email.com"
        aria-invalid={
          isSubmitted ? (errors.email ? "true" : "false") : undefined
        }
        {...register("email", {
          required: "이메일은 필수 입력입니다.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다."
          }
        })}
      />
      {errors.email && <small role="alert">{errors.email.message}</small>}
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="****************"
        aria-invalid={
          isSubmitted ? (errors.password ? "true" : "false") : undefined
        }
        {...register("password", {
          required: "비밀번호는 필수 입력입니다.",
          minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하세요."
          }
        })}
      />
      {errors.password && <small role="alert">{errors.password.message}</small>}
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
 
  );
}

export default Login;

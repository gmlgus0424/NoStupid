import React, { useEffect, useState, useRef } from 'react'
import {useForm} from 'react-hook-form';

const User ={
    name: '홍길동',
    birth:'2000.01.01',
    num:'010-1234-5678',
    email: 'test@ex.com',
    pw:'test1234!',
    rpw:'test1234!'
}

export default function Create() {

    const {register, watch, errors} = useForm();
    console.log(watch('email'))
    const password = useRef();
    password.current=watch("password");
    const onSubmit = (data) => {
        console.log('data', data)

        //axios.post('/', data)
    }

    const [name, setName]= useState("");
    const [birth,setBirth]= useState("");
    const [num,setNum]= useState("");
    const [email, setEmail]= useState("");
    const [pw,setPw]= useState("");
    const [rpw,setRpw]= useState("");

    const [emailVaild, setEmailVaild] = useState(false);
    const [pwVaild, setPwVaild] = useState(false);
    const [rpwVaild, setRpwVaild] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    
    const onClickConfirmButton = () => {
        if(email == User.email){
            alert('이미 가입된 회원 정보입니다.')
        }else{
            alert('가입이 완료되었습니다.')
        }
    }

    useEffect(() => {
        if (emailVaild && pwVaild) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[emailVaild,rpwVaild]);

  return (
    <div className="page">
        <div className="container">
            <div className="back">
                <img className ="backImg" src="img/r2.png" alt="r2"></img>
            </div>


            <div className="title">
                    <p className='titleWrap'>회원가입</p>
            </div>
            
            
            <div className="content">
                <div className='nameInput'>
                    <input className='name' 
                    placeholder='이름'
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className='birthInput'>
                    <input className='birth' 
                    placeholder='생년월일'
                    value={birth} 
                    onChange={(e)=>setBirth(e.target.value)}/>
                </div>

                <div className='numInput'>
                    <input className='num' 
                    placeholder='전화번호'
                    value={num} 
                    onChange={(e)=>setNum(e.target.value)}/>
                </div>

                <div className='mailInput'>
                    <input 
                    type='email'
                    className='mail' 
                    {...register("email",{
                        required: true, 
                        pattern: /^\S+@\S+$/i  })}
                    placeholder='E-mail' 
                    value={email} />
                </div>

                <div className='errorMessage1'>
                    {errors?.email && <p>이메일 형식이 올바르지 않습니다.</p>}
                </div>
                    
                <div className='pwInput'>
                    <input 
                    type='password'
                    name ='pw'
                    className='pw'
                    {...register({
                        required: true,
                        minLength: 8
                    })} 
                    placeholder='Password'
                    value={pw} /> 
                </div>

                <div className='errorMessage2'>
                    {errors?.pw && <p>비밀번호는 8자리 이상 설정해야 합니다.</p>}
                </div>

                <div className='rpwInput'>
                    <input 
                    type='password'
                    name = 'rpw'
                    className='rpw' 
                    {...register ('rpw',
                        {required: true}
                        ,{validate: (value) => value === password.current})}
                    placeholder='reconfirm password' 
                    value={rpw}/>
                </div>

                <div className='errorMessage3'>
                    {errors?.rpw && <p>비밀번호가 일치하지 않습니다.</p>}
                </div>
            </div>
                    
                    
            <div className='submit'>
                <button  
                onClick={onClickConfirmButton}
                disabled={notAllow} 
                className='nextButton'>
                    <p className='next'>SIGN UP</p>
                </button>
            </div>
         </div>
    </div>
  )
}
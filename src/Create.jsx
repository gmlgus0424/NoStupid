import React, { useEffect, useState } from 'react'

const User ={
    name: '홍길동',
    birth:'2000.01.01',
    num:'010-1234-5678',
    email: 'test@ex.com',
    pw:'test1234!',
    rpw:'test1234!'
}

export default function Create() {
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


    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(email)){
            setEmailVaild(true);
        }else{
            setEmailVaild(false);
        }
    }
    const handlePw = (e) => {
        setPw(e.target.value);
        const regex1 =  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex1.test(pw)){
            setPwVaild(true);
        }else{
            setPwVaild(false);
        }
    }
    const handleRpw = (e) => {
        setRpw(e.target.value);
        const regex2 =  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex2.test(rpw)){
            setRpwVaild(true);
        }else{
            setRpwVaild(false);
        }
    }

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
                    type='text'
                    className='mail' 
                    placeholder='E-mail' 
                    value={email} 
                    onChange={handleEmail} />
                </div>

                <div className='errorMessage1'>
                    {!emailVaild && email.length > 0 &&
                        (<p>이메일 형식이 올바르지 않습니다.</p>)}
                </div>
                    
                <div className='pwInput'>
                    <input 
                    type='password'
                    className='pw' 
                    placeholder='Password'
                    value={pw} 
                    onChange={handlePw}/> 
                </div>

                <div className='errorMessage2'>
                    {!pwVaild && pw.length > 0 &&
                        (<p>비밀번호는 8자리 이상 설정해야 합니다.</p>)}
                </div>

                <div className='rpwInput'>
                    <input 
                    type='password'
                    className='rpw' 
                    placeholder='reconfirm password' 
                    value={rpw}
                    onChange={handleRpw}/>
                </div>

                <div className='errorMessage3'>
                    {!rpwVaild && rpw.length > 0 &&
                        (<p>비밀번호는 8자리 이상 설정해야 합니다.</p>)}
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
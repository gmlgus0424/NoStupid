import { useForm } from "react-hook-form";
import React, { useEffect, useState, useRef } from 'react'

export default function Add() {
    const {register, watch, formState:{errors}, handleSubmit, getValues} = useForm();

    const onSubmit = (data) => {
        console.log(data)

        //axios.post('/', data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="page">
                <div className="container1" >  {/* 상단바 */}

                </div>
            


                <div className="container2">  {/* 타이틀, 설정 */}
                        <div className=""></div>  {/* 타이틀 */}
                        <div className=""></div>  {/* 설정 */}
                </div>


                <div className="container3">  {/* 타이틀 아래 */}

                    <div className="">  {/* 막대표시 */}
                    </div>

                    <div className="">  {/* 입력내용 */}
                    <input 
                        className=""
                        placeholder='회사명'
                    />
                    </div>

                    <div className="">  {/* 입력내용 */}
                    <input 
                        className=""
                        placeholder='예상 면접 질문'
                    />
                    </div>

                    <div className="">  {/* 입력내용 */}     
                    <input 
                        className=""
                        placeholder='장소'
                    />
                    </div>
                    
                    <div className="">  {/* 입력내용 */}   
                    <input 
                        className=""
                        placeholder='시간'
                    />   
                    </div>
                    
                    <div className="">  {/* 입력내용 */} 
                    <input 
                        className=""
                        placeholder='yyyy.mm.dd'
                    />          
                    </div>
                    
                    <div className="">  {/* 입력내용 */}
                    <input 
                        className=""
                        placeholder='노션링크'
                    /> 
                    </div>
                            
                    <div className="">  {/* 입력내용 */}
                    <input 
                        className=""
                        placeholder='깃허브'
                    /> 
                    </div>
                            
                    <div className="">  {/* 입력내용 */}
                    <input 
                        className=""
                        placeholder='회고란'
                    /> 
                    </div>

                    <div className="">  {/* 버튼 */}   
                    <input 
                        type="submit"
                        style={{ marginTop: '40px' }}
                    />
                    </div>
                        
                </div>
                    
                    
            </div>  
        </form>

    )
}

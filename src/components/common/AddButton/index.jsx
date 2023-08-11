import React from 'react'
import { ReactComponent as PlusButton } from "../../../assets/icon/PlusButton.svg";
import styled,{css} from 'styled-components';


// 추가버튼 
const StyledPlusButton= styled.button`
background: #949494;
&:hover{
 transform: scale(1.4);
 background: ##686868
}



z-index: 5;
cursor: pointer;
width: 80px;
height: 80px;
display: block;
align-items: center;
justify-content: center;
font-size: 60px;
position: absolute;
left: 50%;
bottom: 0px;
transform: translate(-50%, 50%);
color: white;
border-radius: 50%;
border: none;
outline: none;
display: flex;
align-items: center;
justify-content: center;
`

const AddPlusButton = () => {
  return (
   <>
   <PlusButton>
   
   </PlusButton>
   </>
  )
}

export default  AddPlusButton;




const StyledMyIconPlusButton = styled(PlusButton)``;
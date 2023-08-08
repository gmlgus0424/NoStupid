import React from 'react';
import styled,{css} from 'styled-components'
import PlusButton from '../../../assets/icon/PlusButton';


// 버튼 모양, 크기, 색상 지정
// 원래 색상 하나 , 클릭했을때 바뀌는 색상 하나 이렇게 지정해야함

const AddButton =({color= 'first' , onClick,})=>{

  const lightFigure= Figure=== 'light'? true: false;
  return lightFigure ? (
    <StyledBtn   disabled={disabled} onClick={onClick} color="연한색">
        <PlusButton color="연한색" />
    </StyledBtn>
) : (
    <StyledBtn   disabled={disabled} onClick={onClick} color={color}>
        <PlusButton color="회색" />
    </StyledBtn>
);
}
export default AddButton;

// 버튼 색
const COLOR= {
  first : css`
background-color: #949494;
  opacity: 0.7;
  `,
  second: css`
  background-color: #EAEAEA;
  opacity: 0.7;
  `,

};
const StyledBtn= styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 60px;
 height: 60px;
 cusror: pointer;
`;


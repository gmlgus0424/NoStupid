// 홈화면 리스트 

import { Container,Content,Remove,Save } from "./style";

const CvList=()=>{
  return(
    <Container>
      <Content>
  <p>아무개회사 </p>
  <p>2023.08.11 10:00 </p> 
  <p> 서울특별시 송파구</p>
      </Content>
      <Remove>
        <trashcan />
      </Remove>
      <Save>
        <star/>
        </Save>
    </Container>
  )

}

export default CvList;

// Note: 휴지통 , 별 아이콘 설정 css할때 다시하기

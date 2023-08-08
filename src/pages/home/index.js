import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Name from '../../components/home/Name/index'
import {HomeLayout,ListBox,ListTitle,ListButton,ListContent,ListContainer,AddButtonBox}from './style';
import AddButton from '../../components/common/AddButton/index';//추가버튼
import {ReactComponent as AngleRight} from '../../assets/icon/AngleRight.svg';
import CvList from '../../components/home/'//리스트 보여지는 부분

const Home = () => {
  return (
    <>
    <HomeLayout>
      <main>
        <Name/>
        <ListContainer>
          <ListBox>
            <ListTitle>나의 이력서 총3개  </ListTitle> //note:좋은 제목?타이틀이 있으면 알려주세요
            <ListButton>
            <span>전체보기</span>
            <AngleRight/>
            </ListButton>
          </ListBox>
          <div>
            <ul>
              <ListContent>
                <CvList/>
              </ListContent>

              <ListContent>
                <CvList/>
              </ListContent>

              <ListContent>
                <CvList/>
              </ListContent>
            </ul>
          </div>
        </ListContainer>
      </main>

      //하단 추가버튼 
      <AddButtonBox>
        <AddButton ></AddButton>
      </AddButtonBox>
    </HomeLayout>
    </>
  )
}

export default Home
import React from 'react'
import {
  HomeLayout,
  Header,
ListContainer,
  TitleBox,
  Title,
ListButton,
AngleRight,
CvList,
AddButtonBox,

}
from './style'
import Name from '../../components/home/Name/index';
import Navbar from '../../components/Navbar';
import Cv from '../../components/home/HomeList/index';
import AddButton  from '../../components/common/AddButton/index';
const Home = () => {
  return (
    <>
    <HomeLayout>
                <Header>
                <Name /> 
                </Header>
                <main>
                    <ListContainer>
                        <TitleBox>
                            <Title>나의 총 이력서</Title>
                            <ListButton >
                                <span>전체보기</span>
                                <AngleRight />
                            </ListButton>
                        </TitleBox>
                        <div>
                            <ul>
                                <CvList>
                                    <Cv />
                                </CvList>

                                <CvList>
                                    <Cv />
                                </CvList>

                                <CvList>
                                    <Cv />
                                </CvList>
                                
                            </ul>
                        </div>
                    </ListContainer>
                </main>

                {/* NOTE: NAV랑 이게 나눠져 있는게 맞을까요..? */}
                <AddButtonBox>
                    <AddButton  />
                </AddButtonBox>

              <Navbar/>
            </HomeLayout>
        </>
  )
}

export default Home
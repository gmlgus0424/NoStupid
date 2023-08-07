import {Layout} from '../../components/home/Layout'
import styled from 'styled-components'

const HomeLayout= styled(Layout)`
padding : 0 20px 65px;
 display : flex;
 flex- direction : column; /*세로로 정렬*/
 
`
const ListBox= styled.div`
display:flex; 
justify-content: space-between;
align-items: center;
margin-bottom : 7px;
`

const ListTitle= styled.h3`
  font-weight: 600;
  font-size:15px;
  line-height: 24px;

`
const ListButton = styled.button`
display: flex;

`
const ListContainer= styled.div`
`
const ListContent= styled.li`
`
const AddButtonBox= styled.div`
`


export{
  HomeLayout,
  ListBox,
  ListTitle,
  ListButton,
  ListContainer,
  ListContent,
  AddButtonBox,
}

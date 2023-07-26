import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { ReactComponent as mypage } from "../assets/icon/mypage.svg";
import { ReactComponent as community } from "../assets/icon/community.svg";
import { ReactComponent as menu } from "../assets/icon/menu.svg";
import { ReactComponent as cv } from "../assets/icon/cv.svg";
import { ReactComponent as calendar } from "../assets/icon/calendar.svg";


const Navbar=()=>{
  return (
    <Container>
       <Link to={"/"}>
        <StyledMyIconMenu></StyledMyIconMenu>
      </Link>
      <Link to={"/"}>
        <StyledMyIconCv></StyledMyIconCv>
      </Link>
      <Link to={"/"}>
        <StyledMyIconCalendar></StyledMyIconCalendar>
      </Link>
      <Link to={"/"}>
        <StyledMyIconCommunity></StyledMyIconCommunity>
      </Link>
      <Link to={"/"}>
        <StyledMyIconMypage></StyledMyIconMypage>
      </Link>
    </Container>
  );
};

export default Navbar;
const Container = styled.div`
width: 100%;
position: fixed;
padding: 22px 30px;
left: 0;
bottom: 0;
height: 64px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
`;

const StyledMyIconMenu = styled(menu)``;
const StyledMyIconCommunity = styled(community)``;
const StyledMyIconMypage = styled(mypage)``;
const StyledMyIconCv = styled(cv)``;
const StyledMyIconCalendar = styled(calendar)``;

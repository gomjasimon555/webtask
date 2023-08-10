import React from 'react'
import styled from "styled-components"
import Header from './Header'
import Top from './Top'

const Home = () => {
  return (
    <Container>
    <HeaderContainer>
      <Top />
      <Header />
    
    </HeaderContainer>
    <Overlay />
   
  </Container>
  )
};

export default Home

const Container = styled.div`
background-image:url("/images/plumbing-home.jpg");
background-size:cover;
position:relative;
height:calc(100vh - 105px);
width:100vw;
z-index:-1;
`
;

const HeaderContainer = styled.div`
  display:flex;
  flex-direction:column;
  position: relative;
  z-index: 2; 
`;

const Overlay = styled.div`
  content: "";
  height: calc(100vh -35px);
  background: darkblue;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 35px;
  opacity : 0.6;
  z-index: 1;
`;
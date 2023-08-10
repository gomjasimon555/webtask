import React from 'react'
import styled from "styled-components"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Top = () => {
  return (
    <Container>
      <LeftPart>
       <p>Mon-Fri: 9 AM - 5 PM</p>
        <p>yourbusiness@business.com</p>
      </LeftPart>

      <RightPart>
          <InstaIcon/>
          <LinkedIcon/>
          <WhatsIcon/>

      </RightPart>
    </Container>
  )
}

export default Top

const Container = styled.div`
background-color:skyblue; 
height:35px;
display:flex;
align-items:center;
z-index:12;
`
const LeftPart = styled.div`
margin-left:20px;
display:flex;
margin-right:10px;
flex:1;
`
const RightPart = styled.div`
display:flex;
align-items:center;
margin-right:20px;

`
const InstaIcon =styled(InstagramIcon)``

const LinkedIcon =styled(LinkedInIcon)``

const WhatsIcon =styled(WhatsAppIcon)``
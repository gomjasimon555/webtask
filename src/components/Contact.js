import React from 'react'
import styled from "styled-components"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { TextField } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
const Contact = () => {
  return (
    <Container>
        <TextContainer>
        <Text>
      <p>Have some works for us? <Line/></p>
      <heading>Request A Quote Today</heading>
      <p>Please contact us with all your water needs.
        We look forward to serving you.
      </p>
      </Text>
      </TextContainer>

  <Wrap>
      <FormContainer>
      <heading>Request A Free Quote</heading>
        <TextField placeholder='Full Name' className='txt'/>
        <TextField placeholder='Email Address' className='txt'/>
        <TextField placeholder='Contact Number'className='txt'/>
        <TextField placeholder='Service title'className='txt'/>
        <TextField placeholder='Service Description'className='txt'/>

        <buttonwrapper>
        <button>Send Request</button>
        </buttonwrapper>
      </FormContainer>

      <SideText>
        <P>Visit Our Office <Line/></P>
        <heading>Our Main Office</heading>
        <p>You are welcome to visit our office during office hour. Find details of our
            location and business hours below.
        </p>
        <hr></hr>

<SecondText>
        <span>Address: <p>LaPorte, IN 46350</p></span>
        <span>Phone: <p>(123)123-1234</p></span>
         <span>Business Hours: <p>Mon-Fri:9 am - 5 pm</p></span>
       <span>Email Address: <p>yourbusiness@business.com</p></span>
        </SecondText>
        <heading1>Area Covered</heading1>
        <p>LaPorte Counties</p>
        <p>Porter Counties</p>
        <p>Michigan City</p>
        <p>Michigan</p>
      </SideText>
      </Wrap>

      <Bottom>
        <div1>
            <h1>Business Logo</h1>
            <p>Locally owned and operated company with 20 years of industry experience. We value 
                honesty and integrity in all aspects of our business. </p>
        </div1>

        <div2>
            <h1>Quick Links</h1>
            <p>PortFolio</p>
            <p>Testimonials</p>
            <p>Services</p>
            <p>Contact</p>
        
        </div2>

        <div3>
            <h1>Get In Touch</h1>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p>
            <p>Twitter</p>
            <p>Linkedin</p>
        
        </div3>

        <div4>
            <h1>Basic Info</h1>
            <Wrapper><Map/><p>LaPorte, IN 46350</p></Wrapper>
            
            <Wrapper><PhoneIcon/><p>(123) 123-1234</p></Wrapper>
            <Wrapper><Email/><p>yourbusiness@business.com</p></Wrapper>
            <Wrapper><TimeIcon/><p>Mon-Fri: 9 AM - 5 PM</p></Wrapper>
           
        
        </div4>

      </Bottom>
    </Container>
  )
}

export default Contact

const Container = styled.div`
height:calc(100vh-250px);
width:100vw;

`

const Text = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:10px;
margin-bottom:10px;
height:250px;
width:100vw;
background-size:cover;
position:relative;


::before{
    content:"";
    position:absolute;
    background-image:url("images/p5.jpg");
    background-size:cover;
    top:0;
    bottom:0;
    left:0;
    right:0;
    opacity:0.5;
    z-index:-1;

}


p{
    display:flex;
    align-items:center;
    margin:0;
    color:white;
    
   
}

heading{
    font-size:40px;
    font-weight:bold;
    color:white ;
   
}
`;
const TextContainer = styled.div`
  position: relative;
  z-index: 200000; 
`;
const Line = styled(HorizontalRuleIcon)`
`
const FormContainer = styled.div`
position:relative;
height:430px;
width:350px;
border:5px solid white;
margin-left:20px;
margin-top: -70px; 
background-color: rgba(255, 255, 255, 0.9);
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
border-right: 8px solid skyblue;
border-bottom: 8px solid skyblue;
z-index:2000000000;
margin-right:150px;


heading{
    color:blue;
    font-weight:780;
    font-size:24px;
    margin-bottom:2.5px;
    display:flex;
    justify-content:center;
    align-items:center;

}

.txt{
    margin-top:20px;
    height: 40px;
    width:100%;
    margin-bottom:10px;
  }


  button{
    padding:7px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:10px;
    color:white;
    background-color:blue;
    border:none;
  }


`
const Wrap = styled.div`
display:flex;
`
const SideText = styled.div`
width:450px;
heading{
    font-weight:800;
    font-size:26px;
    color:blue;
}
p{
    display:flex;
    font-size:12px;
}

heading1{
    color:blue;
    font-weight:600;
    font-size:18px;
  
}
`
const SecondText = styled.div`
display:flex;
flex-direction:column;
margin-bottom:10px;

span{
    display:flex;
    align-items:center;
}
`


const P = styled.div`
color:skyblue;
display:flex;
`

const Bottom = styled.div`
display:flex;
background-color:blue;
width:100%;


div1{
    width:350px;
    background:white;
    margin-left:150px;
    margin-right:10px;
    height:230px;
    margin-top:10px;

    h1{
        color:blue;
        display:flex;
        justify-content:center;
        font-size:26px;
    }
}

div2{
margin-right:20px;
div{
        display:flex;
    }
    h1{
        color:skyblue;
        font-size:26px;

    }
    p{
        color:white;
    }
}



div3{
    margin-right:20px;
    h1{
        color:skyblue;
        font-size:26px;

    }
    p{
        color:white;
    }
}

div4{
    
    h1{
        color:skyblue;
        font-size:26px;

    }
    p{
        color:white;
    }
}
`

const Map = styled(MapIcon)``
const PhoneIcon = styled(CallIcon)``
const TimeIcon = styled(AccessTimeFilledIcon)``
const Email = styled(EmailIcon)``

const Wrapper = styled.div`
display:flex;
align-items:center;
color:white;
`
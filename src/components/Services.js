import React from 'react'
import styled from "styled-components"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Services = () => {
  return (
    <Container>

        <Text>
      <p>What we are offering <Line/></p>
      <heading>Our Services</heading>
      <p>No job is too big or too small for the crew at Your Business Name LLC</p>
      </Text>

      <BoxWrapper>
        <FirstBox>
<heading>Plumbing</heading>
<p>Business Name employs access to an exclusive Treatment
    of certified plumbing contractors, with 24-hour plumbing
    services available at cost-efficient pricing.
</p>

<Link>View Details <Arrow/></Link>
        </FirstBox>

        <FirstBox2>
<heading>Water Treatment</heading>
<p>Business Name offers a wide variety of water treatment services. We specialize in clean water
    for quality business, including the installation, repair, and maintenance of 
    water softeners, purifiers, and more.
</p>
<LinkWrapper>
<Link>View Details <Arrow/></Link>
</LinkWrapper>
        </FirstBox2>
        </BoxWrapper>


        
      <BoxWrapper1>
        <SecondBox>
<heading>Plumbing</heading>
<p>Business Name employs access to an exclusive Treatment
    of certified plumbing contractors, with 24-hour plumbing
    services available at cost-efficient pricing.
</p>

<Link>View Details <Arrow/></Link>
        </SecondBox>

        <SecondBox2>
<heading>Water Treatment</heading>
<p>Business Name offers a wide variety of water treatment services. We specialize in clean water
    for quality business, including the installation, repair, and maintenance of 
    water softeners, purifiers, and more.
</p>
<LinkWrapper>
<Link>View Details <Arrow/></Link>
</LinkWrapper>
        </SecondBox2>
        </BoxWrapper1>
    
     
    </Container>
  )
}

export default Services

const Container = styled.div`
height:100vh;
width:100vw;
background-color:#fff;

`

const Line = styled(HorizontalRuleIcon)`
`
const Text = styled.div`
margin:40px;
margin-left:215px;

p{
    display:flex;
    align-items:center;
    margin:0;
}

heading{
    font-size:40px;
    font-weight:bold;
    color:#1C6BE7 ;
}
`;

const BoxWrapper = styled.div`
display:flex;
margin:20px;
justify-content:center;


`;

const FirstBox = styled.div`
border:3px solid skyblue;
width:350px;
height:150px;
margin-right:20px;
padding: 20px;
heading{
    color:skyblue;
}



`

const FirstBox2 = styled.div`
border:3px solid skyblue;
width:390px;
height:150px;
padding: 20px;

heading{
    color:skyblue;
}


`

const Link = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
color:skyblue;
`
const Arrow = styled(ArrowForwardIcon)``

const LinkWrapper = styled.div`
display:flex;
align-items:flex-end;
justify-content:flex-end;
`
const SecondBox = styled.div`
border:3px solid skyblue;
width:420px;
height:150px;
padding: 20px;
margin-right:20px;
heading{
    color:skyblue;
}
`

const SecondBox2 = styled.div`
border:3px solid skyblue;
width:420px;
height:150px;
padding: 20px;

heading{
    color:skyblue;
`

const BoxWrapper1 = styled.div`
display:flex;
margin:20px;
justify-content:center;
margin-left:110px;


`;
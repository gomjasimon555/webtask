import React from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import styled from 'styled-components'

const Featured = () => {
  return (
    <Container>
      
      <Text>
      <p>Honorable Mentions <Line/></p>
      <heading>Featured Projects</heading>
      <p>Some of the projects Business Name repaired</p>
      </Text>



      <Pictures>
      <div>
              <img src="/images/p4.jpg" alt="Slider Image 1" />
            </div>
            <div>
              <img src="/images/p5.jpg" alt="Slider Image 2" />
            </div>
            <div>
              <img src="/images/p6.jpg" alt="Slider Image 2" />
            </div>
            <div>
              <img src="/images/p7.jpg" alt="Slider Image 2" />
            </div>
      </Pictures>

<TextWrapper>
      <Text>
      <p>What our clients say<Line/></p>
      <heading>Client's Testimonials</heading>
      <p>Here's what our Customers are saying about Your Business Name LLC</p>
      </Text>

      <paragraph>We have used Your Business name LLC for several years and consider Tim and 
        his men as a part of our company. Great customer service and very fast service. I'm thankful to have such a reliable, express and trustworthy company to work with.
        
        <author>-John F.Kennedy</author>

        <ImageWrapper>
            <CircleImage src="/images/man.jpg" alt="Circle Image" />
          </ImageWrapper>
        </paragraph>
      </TextWrapper>
    </Container>
  )
}

export default Featured

const Container = styled.div`
height:100vh;
width:100vw;

`

const Text = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:10px;
margin-bottom:10px;
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
const Line = styled(HorizontalRuleIcon)`
`
const Pictures = styled.div`
margin-top:-40px;
display:flex;
justify-content:center;
position:relative;

div{
    postition:relative;
    margin:10px;
}
img{
    height:200px;
    width:250px;
}

::before{
    content:"";
    position:absolute;
    background-color:blue;
    top:0;
    left:0;
    right:0;
    bottom:0;
    opacity:0.14;
}
`
const TextWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-left:10px;


paragraph{
    position:relative;
    width:500px;
    border: 1px solid black;
    margin-left:15px;
    margin-top:10px;
    padding-top:10px;
    height:240px;
    display:flex;
    align-items:flex-start;
    background-color:blue;
    opacity:0.7;
    color:white;
    justify-content:center;

    author{
        position:absolute;
        bottom:0;
        right:0;
    }
}
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items:center;
`;

const CircleImage = styled.img`
  width: 100px; /* Adjust the image size as needed */
  height: 100px; /* Adjust the image size as needed */
  border-radius: 50%;
  border:5px solid white;
  position: absolute;
  bottom: 0;
  left:-60px;
  z-index: 3;
  justify-content:center;
`;

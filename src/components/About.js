import React from 'react';
import styled from 'styled-components';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const About = () => {
  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Picture>
          <img src="/images/watertreatment.jpg" alt="Water Treatment" />
          <Image>
          <SmallImage src="/images/p3.jpg" alt="Small Image" />
          </Image>
        </Picture>
        <Text>
          <p>About Our Company <Line>     </Line></p>
          <h1>Your Business Name LLC</h1>
          <p>
            We are a locally owned and operated company with 20 years of industry experience.
            We value honesty and integrity in all aspects of our business. We offer a variety of
            Home improvement services that are customizable to each individual project.

            We specialize in handyman work and a variety of related service and repair projects. We pride ourselves on the quality
            of our work as well as our commitment to outstanding results. We look forward to building lasting relationships with our clients and guarantee your satisfaction!
          </p>
          <Button>Explore More <ArrowForwardIcon style={{ marginLeft: '5px' }} />
          </Button>
        </Text>
      </Content>
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index:12;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/p5.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.123;
  z-index: -1;
`;

const Content = styled.div`
  display:flex;
  position: relative;
  z-index: 1;
  justify-content:space-between;
  align-items:center;
  height:100vh;
  width: 100vw;
`;

const Picture = styled.div`
position:relative;
display:inline-block;
margin-left:50px;
  img {
    height: 360px;
    width: 340px;
    border: 8px solid white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const SmallImage = styled.img`
  position: absolute;
  bottom: -100px;
  right: -100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);


`;
const Text = styled.div`
  display:flex;
  flex-direction:column;
  padding: 20px;
 justify-content:flex-start;

  width:540px;
 

  h1 {
    color: blue;
    font-size:70px;
    line-spacing:1;
    margin-top:0;
  }

  p {
    color: #555;
    display:flex;
    align-items:center;
    height:20px;
  }
`;

const Image = styled.div`
img{
    height:200px;
    width:210px;
}
`
const Line = styled(HorizontalRuleIcon)`
length:400px;

`
const Button = styled.button`

margin-top:80px;
padding:5.5px;
width:130px;
height:40px;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:12px;
background-color:blue;
`
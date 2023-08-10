import React from 'react'
import styled from "styled-components"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Header = () => {


  return (
    <Container>
        <Menu>
        <LeftMenu>
<Logo>Business Logo</Logo>
</LeftMenu>

<RightMenu>
     
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
       
        </RightMenu>
        </Menu>


        <MainContent>
          <p>Building with Confidence</p>
          <h1> <Highlight>Building </Highlight>And <Highlight>Maintaining</Highlight> Your Dreams</h1>
          <p>Fast, friendly home repair service done right the first time!!</p>

          <Button>Explore More <ArrowForwardIcon style={{ marginLeft: '5px' }} />
          </Button>
        </MainContent>

        <ImageSliderContainer>
          <Carousel showArrows={false} showStatus={false} showIndicators={true} showThumbs={false}>
            <div>
              <img src="/images/man.jpg" alt="Slider Image 1" />
            </div>
            <div>
              <img src="/images/girl.jpg" alt="Slider Image 2" />
            </div>
            <div>
              <img src="/images/p1.jpg" alt="Slider Image 2" />
            </div>
            <div>
              <img src="/images/p2.jpg" alt="Slider Image 2" />
            </div>
          </Carousel>
        </ImageSliderContainer>

    
   

        <BottomContent>
        <span>20+ Years of Experience </span>
        </BottomContent>
      
    </Container>
  )
}

export default Header

const Container = styled.div`
height:35px;
width:100%;
color:white;
z-index:18;

`
const LeftMenu = styled.div`
font-weight:600;
display:flex;
margin-left:20px;
flex:1;
`
const Logo = styled.div`
font-size:20px;

`

const RightMenu = styled.div`
font-size:14px;
text-decoration:none;
display: flex;
align-items: center;
justify-content: flex-end;
list-style:none;
margin-right:30px;
flex:1;


a {
  font-weight: 600;
  text-decoration:none;
  color:white;
  padding: 0 10px;
  flex-wrap: nowrap;
}
@media (max-width: 768px) {
  display: none;
}
`

const Menu = styled.div`
display:flex;


`
const MainContent = styled.div`
display:flex;
flex-direction:column;
width:290px;
align-items:flex-start;
margin-top:50px;
margin-left:30px;
line-height:1;

P{
  font-size:12px;
  margin:10px 0 0 0;
  

}
h1{
  font-size:36px;
  margin-bottom:10px;
  margin-top:10px;
}
`
const Highlight = styled.span`
color: skyblue;

`
const Button = styled.button`
margin-top:10px;
padding:5.5px;
width:130px;
height:40px;
color:darkblue;
display:flex;
align-items:center;
justify-content:center;
font-size:12px;
`

const BottomContent = styled.div`
color:white;
font-size:36px;
font-weight:600;
background-color:skyblue;
z-index:123432;;
height:70px;
margin-top:101px;
display:flex;
justify-content:center;
align-items:center;

span{
  margin-left:20px;
}
`

const ImageSliderContainer = styled.div`
  width: 370px;
  height:0px;
  display: flex;
  align-items: flex-start;
  justify-content:flex-end;
  position:absolute;
  top:35px;
  right:20px;
  margin-top: 50px;
  z-index:30;
 

  img{
    height:390px;
    z-index:20;
  
  }

`;








import React from 'react';
import styled from 'styled-components';
import HeroImage from '../assets/hero.webp';

const Hero = () => {
  return (
    <Wrapper id="home">
      <Container>
        <Content>
          <h1>Welcome to RiseHub</h1>
          <p>Your platform for startup success</p>
          <ButtonGroup>
            <Button href="https://www.onstartups.com/">Explore Blog</Button>
            <Button href="#contact" secondary>Contact Us</Button>
          </ButtonGroup>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  position: relative;
  height: 600px;
  padding-top: 290px; /* Adjust this based on the header height */
  display: flex;
  
  
  color: white;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${HeroImage}) no-repeat center center;
    background-size: cover;
    opacity: 0.; /* Lower the transparency here */
    z-index: -1;
  }
`;

const Container = styled.div`
  
  
  padding: 0 50px;
  text-align: center;
`;

const Content = styled.div`
  
  
  h1 {
    font-size: 65px;
    font-weight: bold;
    margin-top: 0px;
    color:rgb(252, 32, 16);
  }

  p {
    font-size: 30px;
    margin-bottom: 20px;
    color: rgb(31, 72, 204);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

const Button = styled.a`
  background-color: ${({ secondary }) => (secondary ? 'transparent' : '#007BFF')};
  color: ${({ secondary }) => (secondary ? '#fff' : '#fff')};
  padding: 10px 20px;
  border: ${({ secondary }) => (secondary ? '2px solid #fff' : 'none')};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ secondary }) => (secondary ? '#fff' : '#0056b3')};
    color: ${({ secondary }) => (secondary ? '#007BFF' : '#fff')};
  }
`;

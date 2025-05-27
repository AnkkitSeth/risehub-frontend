import React from 'react';
import styled from "styled-components";
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';

const About = () => {
  return (
    <Wrapper id="about">
      <Container>
        <Title>About Us</Title>
        <Description>
        RiseHub is a collaborative platform that connects startups, mentors, and investors. Our goal is to
         create a sustainable ecosystem where innovators can thrive and grow with the right guidance and support.

          At RiseHub, we understand the challenges faced by startups in navigating the competitive business landscape.
          Our platform is designed to bridge the gap between emerging businesses and seasoned industry experts, offering a structured environment where ideas can be nurtured into successful ventures.

          We provide startups with access to valuable resources, including mentorship programs, funding opportunities, 
          and strategic partnerships. By connecting entrepreneurs with experienced mentors and potential investors, we aim to accelerate the growth process and increase the chances of long-term success.

          Our platform fosters a culture of collaboration and knowledge sharing, allowing startups to engage with industry
          leaders, government agencies, and fellow innovators. Through our streamlined contract agreements, secure financial transactions, and transparent communication channels, we ensure that startups have the support they need at every stage of their journey.

          RiseHub is more than just a platform—it's a community where innovative ideas are cultivated, business challenges
          are addressed, and success stories are written. Whether you’re a budding entrepreneur or an experienced investor, RiseHub provides the tools and network to help you achieve your business goals.

          Join RiseHub today and be part of a thriving ecosystem where innovation meets opportunity! 🚀
        </Description>
        <ImageContainer>
          <Image src={about1} alt="Teamwork" />
          <Image src={about2} alt="Innovation" />
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  background: url('/images/about-bg.jpg') no-repeat center center/cover;
  padding: 80px 20px;
  color: #fff;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 46px;
  font-weight: 700;
  margin-bottom: 20px;
  color:rgb(5, 7, 107);
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  color:#666;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

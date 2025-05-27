import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import founder from '../assets/founder.jpg';
import investor from '../assets/investor.jpg';
import mentor from '../assets/mentor.jpg';
import user from '../assets/user.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: founder,
      name: 'Kamlesh Jagwan',
      role: 'Startup Founder',
      feedback:
        'RiseHub helped me connect with investors and secure funding for my startup. The guidance was top-notch!',
    },
    {
      id: 2,
      image: investor,
      name: 'Amitabh Rai',
      role: 'Investor',
      feedback:
        'Through RiseHub, I discovered promising startups and established long-term partnerships. Excellent platform!',
    },
    {
      id: 3,
      image: mentor,
      name: 'Keshav Nawl',
      role: 'Mentor',
      feedback:
        'Being a mentor on RiseHub has allowed me to help startups grow and thrive in competitive markets.',
    },
    {
      id: 4,
      image: user,
      name: 'Misti Khanna',
      role: 'Platform User',
      feedback:
        'RiseHub’s network and resources have been invaluable for my personal and professional growth.',
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Wrapper id="testimonials">
      <Title>What Our Community Says</Title>
      <CarouselContainer>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          arrows={false}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ProfileImage src={testimonial.image} alt={testimonial.name} />
              <CardContent>
                <Name>{testimonial.name}</Name>
                <Role>{testimonial.role}</Role>
                <Feedback>{testimonial.feedback}</Feedback>
              </CardContent>
            </TestimonialCard>
          ))}
        </Carousel>
      </CarouselContainer>
    </Wrapper>
  );
};

export default Testimonials;

const Wrapper = styled.section`
  background-color: #ffffff;
  padding: 80px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  color: rgb(5, 7, 107);
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const CarouselContainer = styled.div`
  margin-top: 20px;
`;

const TestimonialCard = styled(motion.div)`
  background: #f9f9f9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  padding: 20px;

  &:hover {
    transform: translateY(-8px);
  }
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
`;

const CardContent = styled.div`
  padding: 12px;
`;

const Name = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: rgb(5, 7, 107);
  margin-bottom: 8px;
`;

const Role = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: rgb(5, 7, 107);
  margin-bottom: 12px;
`;

const Feedback = styled.p`
  font-size: 16px;
  color: #777;
  line-height: 1.5;
`;

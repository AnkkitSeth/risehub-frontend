import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Users, Handshake, Briefcase } from 'lucide-react';

const Features = () => {
  const data = [
    {
      id: 1,
      title: 'Collaboration',
      description: 'Connect with other startups and work together to create innovative solutions.',
      icon: <Users size={40} />
    },
    {
      id: 2,
      title: 'Borrowing',
      description: 'Easily borrow resources and knowledge from experienced mentors and partners.',
      icon: <Handshake size={40} />
    },
    {
      id: 3,
      title: 'Mentorship',
      description: 'Get guidance from industry experts and grow your startup strategically.',
      icon: <Briefcase size={40} />
    }
  ];

  return (
    <Wrapper id="features">
      <Title>Our Features</Title>
      <CardContainer>
        {data.map((item) => (
          <Card
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: item.id * 0.1 }}
          >
            <IconWrapper>{item.icon}</IconWrapper>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Features;

const Wrapper = styled.section`
  padding: 80px 20px;
  background: white;
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  color: rgb(5, 7, 107);
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled(motion.div)`
  width: 280px;
  height: 240px;
  background:rgb(14, 15, 105);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const IconWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 50%;
  margin-bottom: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin-bottom: 12px;
`;

const CardDescription = styled.div`
  font-size: 16px;
  color: rgba(224, 224, 224, 0.61);
  line-height: 1.5;
`;


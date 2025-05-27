import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Users, DollarSign, Briefcase, Handshake } from 'lucide-react';

const Network = () => {
  const data = [
    { id: 1, title: 'Mentors', value: '120+', icon: <Users size={36} /> },
    { id: 2, title: 'Investors', value: '85+', icon: <DollarSign size={36} /> },
    { id: 3, title: 'Startups', value: '200+', icon: <Briefcase size={36} /> },
    { id: 4, title: 'Partners', value: '50+', icon: <Handshake size={36} /> }
  ];

  return (
    <Wrapper id="network">
      <Title>Our Network</Title>
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
            <CardValue>{item.value}</CardValue>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Network;

const Wrapper = styled.section`
  padding: 80px 20px;
  background: rgb(5, 7, 107);
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
  color:white;
  text-transform: uppercase;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled(motion.div)`
  width: 220px;
  height: 180px;
  background:rgb(14, 15, 105);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.95);
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
  margin-bottom: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardValue = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 5px;
  color: white;
`;

const CardTitle = styled.div`
  font-size: 18px;
  color: rgba(224, 224, 224, 0.61);
  font-weight: 500;
`;


import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is RiseHub?',
      answer: 'RiseHub is a collaborative platform that connects startups, mentors, and investors to foster innovation and growth.',
    },
    {
      question: 'How can I join RiseHub?',
      answer: 'You can join RiseHub by signing up on our website and creating a profile. Once registered, you can access all features.',
    },
    {
      question: 'Is RiseHub free to use?',
      answer: 'Yes, RiseHub offers a free plan with access to basic and advanced features.',
    },
    {
      question: 'How does RiseHub support startups?',
      answer: 'RiseHub provides startups with access to mentors, funding opportunities, and a collaborative ecosystem to thrive.',
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper id="faqs">
      <Title>Frequently Asked Questions</Title>
      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </Question>
            {openIndex === index && (
              <Answer
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </Answer>
            )}
          </FAQItem>
        ))}
      </FAQList>
    </Wrapper>
  );
};

export default Faqs;

const Wrapper = styled.section`
  background: rgb(5, 7, 107);
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Question = styled.div`
  padding: 16px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #f0f0f0;
  transition: background 0.2s ease;
  color:rgb(5, 7, 107);

  &:hover {
    background: #e0e0e0;
  }
`;

const Answer = styled(motion.div)`
  padding: 16px;
  font-size: 16px;
  color: #555;
  background: #fafafa;
  text-align: left;
  border-top: 1px solid #e0e0e0;
`;

import React from 'react';
import styled from 'styled-components';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const ContactUs = () => {
  return (
    <ContactWrapper id="contact">
      <Container>
        <Title>Contact Us</Title>
        <Description>
          Have any questions? Feel free to reach out to us!
        </Description>

        <ContactInfo>
          <ContactItem>
            <Mail size={20} />
            <a href="mailto:ankkitseth@gmail.com">risehub@gmail.com</a>
          </ContactItem>
          <ContactItem>
            <Phone size={20} />
            <a href="tel:+919876543210">+91 98765 43210</a>
          </ContactItem>
        </ContactInfo>

        <SocialIcons>
          <IconLink href="https://www.instagram.com" target="_blank">
            <Instagram size={24} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/ankkit-seth-495182237" target="_blank">
            <Linkedin size={24} />
          </IconLink>
        </SocialIcons>

        <ContactForm>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" required></Textarea>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </Container>
    </ContactWrapper>
  );
};

export default ContactUs;

const ContactWrapper = styled.section`
  background-color: #ffffff;
  color: rgb(5, 7, 107);
  padding: 60px 20px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: rgb(5, 7, 107);
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #ffdd57;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 30px;
`;

const IconLink = styled.a`
  color: rgb(5, 7, 107);
  transition: color 0.2s ease;
  &:hover {
    color: #ffdd57;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: rgb(5, 7, 107);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background-color: #ffdd57;
    color: rgb(5, 7, 107);
  }
`;

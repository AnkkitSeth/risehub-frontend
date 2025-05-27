import React, { useState, useEffect } from "react";
import styled from "styled-components";

const governmentPrograms = [
  {
    id: 1,
    name: "Startup India Initiative",
    department: "Department for Promotion of Industry and Internal Trade (DPIIT)",
    benefits: "Tax exemptions, funding support, and mentorship.",
    link: "https://www.startupindia.gov.in/",
  },
  {
    id: 2,
    name: "MUDRA Loan Scheme",
    department: "Micro Units Development & Refinance Agency Ltd.",
    benefits: "Low-interest loans for small businesses and startups.",
    link: "https://www.mudra.org.in/",
  },
  {
    id: 3,
    name: "Atal Innovation Mission (AIM)",
    department: "NITI Aayog",
    benefits: "Innovation labs, startup incubation, and mentorship programs.",
    link: "https://aim.gov.in/",
  },
  {
    id: 4,
    name: "Digital India Programme",
    department: "Ministry of Electronics & IT",
    benefits: "Funding and support for digital and tech startups.",
    link: "https://digitalindia.gov.in/",
  },
];

const Government = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    // Simulating API fetch
    setPrograms(governmentPrograms);
  }, []);

  return (
    <Wrapper>
      <Content>
        <Title>Government Support for Startups</Title>
        <Description>Explore government-backed schemes, funding opportunities, and policies.</Description>

        <Grid>
          {programs.map((program) => (
            <Card key={program.id}>
              <CardContent>
                <Name>{program.name}</Name>
                <Department>{program.department}</Department>
                <Benefits>{program.benefits}</Benefits>
                <MoreInfo href={program.link} target="_blank">
                  Learn More →
                </MoreInfo>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default Government;

/* Styled Components */
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f4f4f9;
  padding: 40px;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
`;

const Department = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #007BFF;
  margin-top: 5px;
`;

const Benefits = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0;
`;

const MoreInfo = styled.a`
  font-size: 14px;
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

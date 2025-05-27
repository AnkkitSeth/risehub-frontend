import React, { useState, useEffect } from "react";
import styled from "styled-components";

const researchersData = [
  {
    id: 1,
    name: "Dr. Ankit Sharma",
    expertise: "AI & Machine Learning",
    researchField: "Deep Learning for Image Recognition",
    description: "Working on AI-driven solutions for autonomous systems.",
    image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1742929793~exp=1742933393~hmac=ad63a3f4d62fccf653e60b0fbdfa600a5ad5d3221dd9fbe3dace08c6faa70412&w=826", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Prof. Riya Mehta",
    expertise: "Biotechnology",
    researchField: "CRISPR-based Gene Editing",
    description: "Focused on genetic modifications to improve healthcare.",
    image: "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-161980.jpg?w=826",
  },
  {
    id: 3,
    name: "Dr. Rajesh Verma",
    expertise: "Cybersecurity",
    researchField: "Blockchain Security",
    description: "Researching how blockchain enhances digital security.",
    image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1742929793~exp=1742933393~hmac=ad63a3f4d62fccf653e60b0fbdfa600a5ad5d3221dd9fbe3dace08c6faa70412&w=826",
  },
];

const Researcher = () => {
  const [researchers, setResearchers] = useState([]);

  useEffect(() => {
    // Simulating an API fetch
    setResearchers(researchersData);
  }, []);

  return (
    <Wrapper>
      <Content>
        <Title>Meet Our Researchers</Title>
        <Description>Explore our top researchers and their groundbreaking work.</Description>

        <Grid>
          {researchers.map((researcher) => (
            <Card key={researcher.id}>
              <Image src={researcher.image} alt={researcher.name} />
              <CardContent>
                <Name>{researcher.name}</Name>
                <Expertise>{researcher.expertise}</Expertise>
                <ResearchField>{researcher.researchField}</ResearchField>
                <DescriptionText>{researcher.description}</DescriptionText>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default Researcher;

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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
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

const Expertise = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #007BFF;
  margin-top: 5px;
`;

const ResearchField = styled.p`
  font-size: 14px;
  color: #555;
  font-style: italic;
`;

const DescriptionText = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;


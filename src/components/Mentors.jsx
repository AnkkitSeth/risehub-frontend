import React, { useState, useEffect } from "react";
import styled from "styled-components";

const mentorsData = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    expertise: "AI & Machine Learning",
    experience: "15+ years",
    guidance: "Startups in AI, Data Science Research",
    image: "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-161980.jpg?w=826",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    expertise: "Business Strategy",
    experience: "20+ years",
    guidance: "Scaling Startups, Business Growth",
    image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1742929793~exp=1742933393~hmac=ad63a3f4d62fccf653e60b0fbdfa600a5ad5d3221dd9fbe3dace08c6faa70412&w=826",
  },
  {
    id: 3,
    name: "Priya Khandelwal",
    expertise: "Product Design & UI/UX",
    experience: "10+ years",
    guidance: "Building User-Centered Products",
    image: "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-161980.jpg?w=826",
  },
];

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Simulating API fetch
    setMentors(mentorsData);
  }, []);

  return (
    <Wrapper>
      <Content>
        <Title>Meet Our Mentors</Title>
        <Description>Learn from experts guiding startups in different domains.</Description>

        <Grid>
          {mentors.map((mentor) => (
            <Card key={mentor.id}>
              <Image src={mentor.image} alt={mentor.name} />
              <CardContent>
                <Name>{mentor.name}</Name>
                <Expertise>{mentor.expertise}</Expertise>
                <Experience>Experience: {mentor.experience}</Experience>
                <Guidance>Guides in: {mentor.guidance}</Guidance>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default Mentors;

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

const Experience = styled.p`
  font-size: 14px;
  color: #555;
`;

const Guidance = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

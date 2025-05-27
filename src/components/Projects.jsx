import React from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.avif';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: 'AI-based Farming Solutions',
      description: 'Using AI to optimize crop growth and reduce waste.',
    },
    {
      id: 2,
      image: project2,
      title: 'Blockchain-based Contracts',
      description: 'Ensuring secure and transparent agreements.',
    },
    {
      id: 3,
      image: project3,
      title: 'IoT for Smart Irrigation',
      description: 'Smart irrigation system to save water and improve yield.',
    },
    {
      id: 4,
      image: project4,
      title: 'Renewable Energy Solutions',
      description: 'Harnessing solar energy to power farms and startups.',
    }
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <Wrapper id="projects">
      <Title>Featured Projects & Innovations</Title>
      <CarouselContainer>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={false}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image src={project.image} alt={project.title} />
              <CardContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </CardContent>
            </ProjectCard>
          ))}
        </Carousel>
      </CarouselContainer>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.section`
  background: rgb(5, 7, 107);
  color: #fff;
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
  color: white
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

const CarouselContainer = styled.div`
  margin-top: 20px;
`;

const ProjectCard = styled(motion.div)`
  background:rgba(221, 218, 41, 0.11);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 24px;
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: white;
  margin-bottom: 12px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color:rgba(224, 224, 224, 0.61);
  line-height: 1.5;
`;

const ArrowButton = styled.button`
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const CustomLeftArrow = ({ onClick }) => (
  <ArrowButton style={{ position: 'absolute', left: -30, top: '40%' }} onClick={onClick}>
    <ChevronLeft size={24} />
  </ArrowButton>
);

const CustomRightArrow = ({ onClick }) => (
  <ArrowButton style={{ position: 'absolute', right: -30, top: '40%' }} onClick={onClick}>
    <ChevronRight size={24} />
  </ArrowButton>
);

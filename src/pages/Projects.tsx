import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useInView from "../hooks/useInView";

const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "A full-stack e-commerce application with payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://ecommerce.example.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my projects and skills.",
    technologies: ["React", "Styled-Components", "Framer Motion"],
    link: "https://portfolio.example.com",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather forecasting app using real-time API integration.",
    technologies: ["React", "OpenWeather API"],
    link: "https://weather.example.com",
  },
];

const Container = styled.div`
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Creates responsive columns */
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const Technologies = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 15px;
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, 0.2);

  return (
    <Container id="projects" ref={ref}>
      <Title
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </Title>
      <Grid
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <Description>{project.description}</Description>
            <Technologies>
              Technologies: {project.technologies.join(", ")}
            </Technologies>
            <LinkButton href={project.link} target="_blank">
              View Project
            </LinkButton>
          </ProjectCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;

import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNode,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faShieldAlt, faMicrochip, faCode } from "@fortawesome/free-solid-svg-icons";
import useInView from "../hooks/useInView";

const skills = [
  { id: 1, name: "React", icon: faReact },
  { id: 2, name: "JavaScript", icon: faJs },
  { id: 3, name: "Node.js", icon: faNode },
  { id: 4, name: "MongoDB", icon: faDatabase },
  { id: 5, name: "Express.js", icon: faCode },
  { id: 6, name: "Python", icon: faPython },
  { id: 7, name: "C", icon: faCode },
  { id: 8, name: "C++", icon: faCode },
  { id: 9, name: "Rust", icon: faCode },
  { id: 10, name: "ARM", icon: faMicrochip },
  { id: 11, name: "x86", icon: faMicrochip },
  { id: 12, name: "Cybersecurity", icon: faShieldAlt },
];

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 20px;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Creates a responsive grid */
  gap: 20px;
  width: 100%;
`;

const SkillCard = styled(motion.div)`
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

const Icon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, 0.2);

  return (
    <Container id="skills" ref={ref}>
      <Title
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        My Skills
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
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Icon>
              <FontAwesomeIcon icon={skill.icon} />
            </Icon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;

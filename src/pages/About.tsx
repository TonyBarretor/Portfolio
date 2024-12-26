import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useInView from "../hooks/useInView";

const Container = styled.div`
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Container ref={ref}>
      <Title
        as={motion.h1}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        About Me
      </Title>
      <Description
        as={motion.p}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I am a passionate software developer with expertise in React and
        full-stack development.
      </Description>
    </Container>
  );
};

export default About;

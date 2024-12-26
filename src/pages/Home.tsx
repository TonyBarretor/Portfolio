import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useInView from "../hooks/useInView";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Home: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, 0.2); // Trigger animation when 20% of the element is visible

  return (
    <Container ref={ref}>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to My Portfolio
      </Title>
      <Description
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Explore my projects and skills.
      </Description>
    </Container>
  );
};

export default Home;

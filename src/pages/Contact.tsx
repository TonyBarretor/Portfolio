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

const Form = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 1rem;
  resize: none;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 10px 15px;
  font-size: 1rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <Container ref={ref}>
      <Title
        as={motion.h1}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </Title>
      <Form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea rows={5} placeholder="Your Message" required />
        <SubmitButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
        >
          Send Message
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Contact;

import React from "react";
import styled from "styled-components";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;

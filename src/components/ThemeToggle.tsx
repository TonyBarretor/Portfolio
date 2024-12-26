import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../main";

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </ToggleButton>
  );
};

export default ThemeToggle;

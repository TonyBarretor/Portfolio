import React from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    padding: 5px 10px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <a href="#home">Tony Barreto</a>
        </Logo>
        <NavLinks>
          <NavLink>
            <a href="#home">Home</a>
          </NavLink>
          <NavLink>
            <a href="#projects">Projects</a>
          </NavLink>
          <NavLink>
            <a href="#skills">Skills</a>
          </NavLink>
          <NavLink>
            <a href="#about">About</a>
          </NavLink>
          <NavLink>
            <a href="#contact">Contact</a>
          </NavLink>
        </NavLinks>
        <ThemeToggle />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

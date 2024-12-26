import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Section = styled.section`
  min-height: 100vh; /* Ensures each section occupies full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start; /* Snap scrolling behavior */
`;

const Main = styled.main`
  scroll-snap-type: y mandatory; /* Enables vertical snap scrolling */
  overflow-y: scroll;
`;

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Section id="home">
          <Home />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Main>
    </>
  );
};

export default App;

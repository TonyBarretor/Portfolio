import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import App from "./App";

export const ThemeContext = createContext({
  toggleTheme: () => {},
  isDarkMode: false,
});

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

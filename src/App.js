import "./App.css";
import Landing from "./component/Landing/Landing.jsx";
import React, { Component } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext("null");

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Landing />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

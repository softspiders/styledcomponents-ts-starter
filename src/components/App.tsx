import React from "react";
import { ThemeProvider } from "styled-components";

import Header from "./Header";
import Wrapper from "./Wrapper";

const themeCalibri = {
  font: "Calibri",
  fontSize: "16pt"
};

const themeArial = {
  font: "Arial",
  fontSize: "30pt"
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeCalibri}>
        <Header>Small Calibri text!</Header>
      </ThemeProvider>
      <ThemeProvider theme={themeArial}>
        <Wrapper>
          <Header>Big Arial text!</Header>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;

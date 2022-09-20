import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Container } from "@mui/material";
import React from "react";
import ParticlesComponent from "./components/particle/Particle";

const App = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container
        maxWidth={"1280px"}
        sx={{ p: 3, textAlign: "center", flex: "1 1 auto" }}
      >
        {children}
      </Container>
      <Footer />
      <ParticlesComponent/>
    </React.Fragment>
  );
};

export default App;

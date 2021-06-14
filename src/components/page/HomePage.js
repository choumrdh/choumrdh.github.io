import React from "react";
import About from "../about/About";
import Project from "../project/Project"
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <About />
      <Project/>
    </Container>
  );
}
export default HomePage;

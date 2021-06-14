import React from "react";
import Intro from "../Intro/Intro";
import About from "../about/About";
import Information from "../information/Information";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <Intro />
      <About />
      <Information />
    </Container>
  );
}
export default HomePage;

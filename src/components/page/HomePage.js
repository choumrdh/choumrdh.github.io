import React from "react";
import About from "../about/About";
import Information from "../information/Information"
import { Container } from "react-bootstrap";

function HomePage() {
  return (
      <Container>
        <About />
        <Information/>
      </Container>
  );
}
export default HomePage;

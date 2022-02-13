import React from "react";
import { Container } from "react-bootstrap";
const Header = () => {
  return (
    <Container className="pt-5">
      <h1>Edvora</h1>
      <h4 className="pt-3" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
        Products
      </h4>
    </Container>
  );
};

export default Header;

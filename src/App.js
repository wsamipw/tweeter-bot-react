import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Container, Row, Col} from "reactstrap";

import packageJson from "../package.json";
import NavBar from "./components/NavBar.js";
import MainRoute from "./config/routes";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row className="bg-dark text-white">
          <Col className="p-4">
            <h3>SweetyBot</h3>
          </Col>
        </Row>
        <NavBar />
        <MainRoute />
      </Container>
    </BrowserRouter>
  );
}

export default App;

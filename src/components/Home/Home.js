import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => (
  <Container>
    <Row>
      <Col>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h5 className="display-6 fw-normal">Home Page</h5>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        Simple boilerplate for react js hooks, context api & docker
      </Col>
    </Row>
  </Container>);

export default Home;

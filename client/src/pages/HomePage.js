import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const HomePage = () => {

  return (
    <Container className="d-flex justify-content-center align-items-center" style={styles.container}>
      <Row>
        <Col className="text-left" xs={12} md={6} style={styles.left}>
          <h1 style={styles.title}>MyWeek</h1>
          <p style={styles.description}>This is a placeholder</p>
        </Col>  
        <Col className="text-right" xs={12} md={6} style={styles.right}>
          <img
            src="./racoon-sweeping.png"
            alt="racoon-sweeping"
            style={styles.image}
          />
        </Col>
        <Col className="text-center" xs={12}>
          <Button variant="primary" style={styles.loginButton}>
            Login or Signup
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    height: '100vh',
  },
  left: {
    marginRight: '20px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '18px',
  },
  right: {
    marginLeft: '20px',
  },
  image: {
    width: '400px',
    height: '400px',
  },
  loginButton: {
    fontSize: '24px',
    padding: '10px 20px',
    borderRadius: '5px',
  },
};

export default HomePage;
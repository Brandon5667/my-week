import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const HomePage = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={styles.container}>
      <Row >
        <Col className="text-center" xs={12} md={6} style={styles.half}>
          <h1 style={styles.title}>MyWeek</h1>
          <p style={styles.description}>Tired of traditional chore management methods that lack motivation and excitement? MyWeek brings a refreshing twist by introducing a points-based system, allowing you to assign points to each chore based on its difficulty or importance. By adding an element of competition, MyWeek encourages users to strive for excellence and surpass their own expectations.</p>
        </Col>
        
        
        {/* <Col className="text-right" xs={12} md={6} style={styles.right}>
          <img
            src="./racoon-sweeping.png"
            alt="racoon-sweeping"
            style={styles.image}
          />
        </Col> */}
        
        <Col className="text-center" xs={12} style={styles.half}>
        <img
            src="./racoon-sweeping.png"
            alt="racoon-sweeping"
            style={styles.image}
          />
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {

  half: {
    width: '30%',
  },
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
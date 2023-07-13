import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const HomePage = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row noGutters>
        <Col className="text-center" xs={12} md={6}>
          <h2>MyWeek</h2>
          <p>
            Tired of traditional chore management methods that lack motivation
            and excitement? MyWeek brings a refreshing twist by introducing a
            points-based system, allowing you to assign points to each chore
            based on its difficulty or importance. By adding an element of
            competition, MyWeek encourages users to strive for excellence and
            surpass their own expectations.
          </p>
        </Col>
        <Col className="text-right" xs={12} md={6}>
          <img
            src="./racoon-sweeping.png"
            alt="racoon-sweeping"
            className="d-none d-md-block"
          />
          <div>
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-primary m-2" to="/profile">
                  View My Profile
                </Link>
                <Button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </Button>
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

export default HomePage;

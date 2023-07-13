import React, { useState, useEffect } from "react";
import { GET_ME } from "../utils/queries";
import { DELETE_USER } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { Container, Row, Col, Button } from "react-bootstrap";
import Auth from "../utils/auth";

const Profile = () => {
  const { loading, error, data } = useQuery(GET_ME);
  const [deleteAccount] = useMutation(DELETE_USER);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (data && data.me) {
      setUsername(data.me.username);
      setEmail(data.me.email);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const handleDeleteAccount = async () => {
    try {
      await deleteAccount();
      window.location.assign("/");
      Auth.logout();
    } catch (error) {
      console.log("Error deleting account:", error.message);
    }
  };
  return (
    <Container className="d-flex align-items-center justify-content-center h-100 ">
      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="profile-card">
            <h2 className="profile-heading">Profile</h2>
            <div className="profile-info">
              <h5 className="form-label">Username:</h5>
              <p className="card-text">{username}</p>
            </div>
            <div className="profile-info">
              <h4 className="form-label">Email:</h4>
              <p className="card-text">{email}</p>
            </div>
            <Button
              variant="danger"
              className="profile-button"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

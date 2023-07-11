import React, { useState, useEffect } from 'react';
 import {GET_ME} from '../utils/queries'
import { useQuery } from '@apollo/client';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Profile = () =>{
  const { loading, error, data } = useQuery(GET_ME);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

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

    return(
      <Container>
      <Row className="mt-4">
        <Col>
          <h2>Profile</h2>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <p className="card-text">{username}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <p className="card-text">{email}</p>
          </div>
          <Button variant="danger">
            Delete Account 
          </Button>
        </Col>
      </Row>
    </Container>
    )
}

export default Profile

import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import {useQuery, useMutation} from '@apollo/client'
import ListGroup from 'react-bootstrap/ListGroup';



const choreList = () => {
  

    return (
        <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>8 am</ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
    </Card>,
    <Card style={{ width: '18rem' }}>
    <ListGroup variant="flush">
      <ListGroup.Item>9 am</ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
    </ListGroup>
  </Card>,
  <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>10 am</ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
  </ListGroup>
</Card>,
<Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>11 am</ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
    </Card>
    
    );

};

export default choreList;
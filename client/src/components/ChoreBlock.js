import React from "react";
import {Button, Card, Stack} from 'react-bootstrap';

const ChoreBlock = () => {
  return (
    <Stack gap={3}>
        <Card>
        <Card.Header as="h5"></Card.Header>
        <Card.Body>
            <Card.Title></Card.Title>
            <Button variant="primary">Complete Chore</Button>
        </Card.Body>
        </Card>
    </Stack>
  );
};

export default ChoreBlock;
import React from "react";
import {Button, Card, Stack} from 'react-bootstrap';

const ChoreBlock = ({time,choreName,onclick}) => {
  return (
    <Stack gap={3}>
        <Card>
        <Card.Header as="h5">{time}</Card.Header>
        <Card.Body>
            <Card.Title>{choreName}</Card.Title>
            <Button onClick={onclick} variant="primary">Complete Chore</Button>
        </Card.Body>
        </Card>
    </Stack>
  );
};

export default ChoreBlock;
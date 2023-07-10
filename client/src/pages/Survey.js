import React from "react";
import {Stack, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { ADD_SURVEY } from "../utils/mutations";

const Survey = () => {
  
  
  return (
        <div>
        <h1>Please Rate the  Following Chores</h1>
        <Stack gap={3}>
        <Card className="text-center">
            <Card.Header>Chore 1</Card.Header>
            <Card.Body>
                <Card.Title>Taking out the trash.</Card.Title>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item key="1" value="1">1 Ezy Pezy</Dropdown.Item>
                        <Dropdown.Item key="2" value="2">2 Alright, alright!</Dropdown.Item>
                        <Dropdown.Item key="3" value="3">3 In different</Dropdown.Item>
                        <Dropdown.Item key="4" value="4">4 Sucks</Dropdown.Item>
                        <Dropdown.Item key="5" value="5">5 Really Sucks</Dropdown.Item>
                    </DropdownButton>
            </Card.Body>
        </Card>
        <Card className="text-center">
            <Card.Header>Chore 2</Card.Header>
            <Card.Body>
                <Card.Title>Washing the dishes.</Card.Title>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                      <Dropdown.Item key="1" value="1">1 Ezy Pezy</Dropdown.Item>
                      <Dropdown.Item key="2" value="2">2 Alright, alright!</Dropdown.Item>
                      <Dropdown.Item key="3" value="3">3 In different</Dropdown.Item>
                      <Dropdown.Item key="4" value="4">4 Sucks</Dropdown.Item>
                      <Dropdown.Item key="5" value="5">5 Really Sucks</Dropdown.Item>
                    </DropdownButton>
            </Card.Body>
        </Card>
        <Card className="text-center">
            <Card.Header>Chore 3</Card.Header>
            <Card.Body>
                <Card.Title>Cleaning the bathroom</Card.Title>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                      <Dropdown.Item key="1" value="1">1 Ezy Pezy</Dropdown.Item>
                      <Dropdown.Item key="2" value="2">2 Alright, alright!</Dropdown.Item>
                      <Dropdown.Item key="3" value="3">3 In different</Dropdown.Item>
                      <Dropdown.Item key="4" value="4">4 Sucks</Dropdown.Item>
                      <Dropdown.Item key="5" value="5">5 Really Sucks</Dropdown.Item>
                    </DropdownButton>
            </Card.Body>
        </Card>
        <Card className="text-center">
            <Card.Header>Chore 4</Card.Header>
            <Card.Body>
                <Card.Title>Taking a walk.</Card.Title>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                      <Dropdown.Item key="1" value="1">1 Ezy Pezy</Dropdown.Item>
                      <Dropdown.Item key="2" value="2">2 Alright, alright!</Dropdown.Item>
                      <Dropdown.Item key="3" value="3">3 In different</Dropdown.Item>
                      <Dropdown.Item key="4" value="4">4 Sucks</Dropdown.Item>
                      <Dropdown.Item key="5" value="5">5 Really Sucks</Dropdown.Item>
                    </DropdownButton>
            </Card.Body>
        </Card>
        <Card className="text-center">
            <Card.Header>Chore 5</Card.Header>
            <Card.Body>
                <Card.Title>Cleaning the floor.</Card.Title>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                      <Dropdown.Item key="1" value="1">1 Ezy Pezy</Dropdown.Item>
                      <Dropdown.Item key="2" value="2">2 Alright, alright!</Dropdown.Item>
                      <Dropdown.Item key="3" value="3">3 In different</Dropdown.Item>
                      <Dropdown.Item key="4" value="4">4 Sucks</Dropdown.Item>
                      <Dropdown.Item key="5" value="5">5 Really Sucks</Dropdown.Item>
                    </DropdownButton>
            </Card.Body>
        </Card>
        </Stack>
        </div>
    );
};

export default Survey;
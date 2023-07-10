import React from "react";
import ChoreBlock from '../components/ChoreBlock';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import {Dropdown, Card, ButtonGroup, Button} from 'react-bootstrap';
// import { GET_ME } from '../utils/queries';
// import {GET_CHORES} from '../utils/queries';
//sort by time

const Chorepage = () => {
    // run query hear get chores attached to user and sort by time then pass in to ChoreBlock
    // set up addChore function
    // add dropdown add chore button create card for adding chore
    return (
        <div className="chore-page">
            <h2>Chore Page</h2>
            <Dropdown as={ButtonGroup}>
                <Button variant="info">Add a Chore</Button>
                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Trash</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Dishes</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <ChoreBlock />
        </div>
    )
};

export default Chorepage;
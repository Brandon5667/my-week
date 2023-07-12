import React, { useState } from "react";
import ChoreBlock from "../components/ChoreBlock";
import { Navigate, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import {
  Dropdown,
  Card,
  ButtonGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { GET_ME } from "../utils/queries";
import { ADD_CHORE, COMPLETE_CHORE } from "../utils/mutations";
// import ChorePopup from '../components/ChorePopup';
//sort by time

const Chorepage = () => {
  // get user data and name data property "userData"
  const { loading, data: userData } = useQuery(GET_ME);
  // get chores from userData
  const chores = userData?.me?.chores;

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const timeOptions = [];
  for (var i = 1; i < 25; i++) {
    timeOptions.push(
      <option key={i} value={i}>
        {i < 13 ? i : i - 12}
        {i < 12 || i == 24 ? "am" : "pm"}
      </option>
    );
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formState, setFormState] = useState({
    choreName: "",
    time: "",
    day: "",
  });

  const handleComplete = async (event) => {};

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [addChore, { error }] = useMutation(ADD_CHORE, {
    refetchQueries: [{ query: GET_ME }],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addChore({
        variables: {
          choreName: formState.choreName,
          time: formState.time * 1,
          day: formState.day * 1,
          score: 1,
        },
      });
      console.log(formState);
      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  // run query hear get chores attached to user and sort by time then pass in to ChoreBlock
  // set up addChore function
  // add dropdown add chore button create card for adding chore
  return (
    <div className="chore-page">
      <h2>Chore Page</h2>
      <div>
        <>
          <Button type="submit" onClick={handleShow}>
            ADD CHORE
          </Button>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Form.Select
                name="choreName"
                value={formState.choreName}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                <option value="Trash">Trash</option>
                <option value="Dishes">Dishes</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Walk">Walk</option>
                <option value="Floor">Floor</option>
              </Form.Select>
            </Modal.Header>
            <Modal.Body>
              <Form.Select
                name="time"
                value={formState.time}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Select a time</option>
                {timeOptions}
              </Form.Select>
              <Form.Select
                name="day"
                value={formState.day}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Select a day</option>
                {days.map((day, index) => {
                  return (
                    <option key={index + 1} value={index + 1}>
                      {day}
                    </option>
                  );
                })}
              </Form.Select>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleFormSubmit}>
                Save Chore
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
      <div>
        {loading ? <h2>Loading...</h2> : <h1>All Chores</h1>}

        {chores &&
          chores.map((chore) => {
            return (
              <Card key={chore._id}>
                <Card.Header>{chore.choreName}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    {days[chore.day - 1]} at{" "}
                    {chore.time < 13 ? chore.time : chore.time - 12}
                    {chore.time < 12 || chore.time == 24 ? "am" : "pm"}
                  </Card.Text>
                  <Button>Update</Button>
                  <Button onClick={handleComplete}>Complete</Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Chorepage;

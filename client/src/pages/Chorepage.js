import React, { useState } from "react";
import ChoreBlock from "../components/ChoreBlock";
import { Navigate, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import {
  Container,
  Dropdown,
  Card,
  ButtonGroup,
  Button,
  Modal,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { GET_ME } from "../utils/queries";
import { ADD_CHORE, COMPLETE_CHORE } from "../utils/mutations";
// import ChorePopup from '../components/ChorePopup';
//sort by time

const Chorepage = () => {
  const today = new Date();
  const todayWeekday = today.getDay();
  // get user data and name data property "userData"
  const { loading, data: userData } = useQuery(GET_ME);
  // get chores from userData
  let chores = userData?.me?.chores;
  const newChores = () => {
    if (chores) {
      const choresCopy = JSON.parse(JSON.stringify(chores));
      return choresCopy.map((chore) => {
        chore.position = chore.day < todayWeekday ? chore.day + 7 : chore.day;
        return chore;
      });
    }
  };
  console.log(newChores());

  const survey = userData?.me?.survey[0];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  console.log(todayWeekday);

  const timeOptions = [];
  for (var i = 1; i < 25; i++) {
    timeOptions.push(
      <option key={i} value={i}>
        {i < 13 ? i : i - 12}
        {i < 12 || i == 24 ? "am" : "pm"}
      </option>
    );
  }

  const [show, setShow] = useState("hidden");

  const handleClose = () => setShow("hidden");
  const handleShow = () => setShow("shown");
  const [formState, setFormState] = useState({
    choreName: "",
    time: "",
    day: "",
  });

  // Handling for completing a chore
  const [completeChore, { error: completeChoreError }] = useMutation(
    COMPLETE_CHORE,
    {
      refetchQueries: [{ query: GET_ME }],
    }
  );
  const handleCompleteChore = async (choreId) => {
    try {
      const { data } = await completeChore({ variables: { choreId } });
    } catch (err) {
      console.log(err);
    }
  };

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
      console.log(formState.choreName);
      const score = survey[formState.choreName];
      console.log("The survey score:", score);

      const { data } = await addChore({
        variables: {
          choreName: formState.choreName,
          time: formState.time * 1,
          day: formState.day * 1,
          score: score * 1,
        },
      });
      handleClose();
    } catch (e) {
      console.error(e);
    }
  };

  // run query hear get chores attached to user and sort by time then pass in to ChoreBlock
  // set up addChore function
  // add dropdown add chore button create card for adding chore
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>Chore Page</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={5}>
          <Button type="submit" onClick={handleShow}>
            ADD CHORE
          </Button>
          <br />
          <div className={show} onHide={handleClose} animation={false}>
            <Form.Select
              name="choreName"
              value={formState.choreName}
              onChange={handleChange}
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="trash">Trash</option>
              <option value="dishes">Dishes</option>
              <option value="bathroom">Bathroom</option>
              <option value="walk">Walk</option>
              <option value="floor">Floor</option>
            </Form.Select>
            <br />
            <Form.Select
              name="time"
              value={formState.time}
              onChange={handleChange}
              aria-label="Default select example"
            >
              <option>Select a time</option>
              {timeOptions}
            </Form.Select>
            <br />
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
            <br />
            <Button variant="primary" onClick={handleFormSubmit}>
              Save Chore
            </Button>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <div>
            {loading ? <h2>Loading...</h2> : <h1>Due Today</h1>}

            {chores &&
              newChores()
                .sort((a, b) => {
                  return a.position - b.position;
                })
                .filter((chore) => {
                  return chore.completed == false && chore.day == todayWeekday;
                })
                .map((chore) => {
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
                        <Button onClick={() => handleCompleteChore(chore._id)}>
                          Complete
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chorepage;

import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { GET_ME } from "../utils/queries";
import { ADD_CHORE } from "../utils/mutations";
import Chores from "../components/Chores";
import AddChoreModal from "../components/AddChoreModal";

const Chorepage = () => {
  // get the current weekday – to compare to day property in chores
  const currentWeekday = () => {
    const today = new Date();
    return today.getDay();
  };

  // get user data and name data property "userData"
  const { loading, data: userData } = useQuery(GET_ME);

  // get chores from userData
  const allChores = userData?.me?.chores;

  //get today's chores
  const todayChores = () => {
    if (allChores) {
      return allChores.filter((chore) => {
        return chore.completed == false && chore.day == currentWeekday();
      });
    }
  };

  // get chores that don't fall on today
  const laterChores = () => {
    if (allChores) {
      const filteredChores = JSON.parse(
        JSON.stringify(
          allChores.filter((chore) => {
            return chore.completed == false && !(chore.day == currentWeekday());
          })
        )
      );
      return filteredChores
        .map((chore) => {
          chore.position =
            chore.day < currentWeekday() ? chore.day + 7 : chore.day;
          return chore;
        })
        .sort((a, b) => {
          return a.position - b.position;
        });
    }
  };

  const survey = userData?.me?.survey[0];
  const score = userData?.me?.score;

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

  const [visible, setVisible] = useState("hidden");

  const handleHide = () => setVisible("hidden");
  const handleReveal = () => setVisible("shown");
  const [formState, setFormState] = useState({
    choreName: "",
    time: "",
    day: "",
  });

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

  const handleAddChore = async (event) => {
    event.preventDefault();

    try {
      const score = survey[formState.choreName];

      await addChore({
        variables: {
          choreName: formState.choreName,
          time: formState.time * 1,
          day: formState.day * 1,
          score: score * 1,
        },
      });
      setFormState({ choreName: "", time: "", day: "" });
      handleHide();
    } catch (e) {
      console.error(e);
    }
  };

  const [selectedChore, setSelectedChore] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = (chore) => {
    setSelectedChore(chore);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddChoreModal
        open={open}
        handleClose={handleClose}
        selectedChore={selectedChore}
      />
      <div className="title">
        <h2>Chore Page</h2>
      </div>
      <Container fluid>
        <Row>
          <Col className="score-addChore" xs={12} lg={4}>
            <h4 id="score-block">Your Score: {score}</h4>
            <div className="addChore-form">
              <Button type="submit" onClick={handleReveal}>
                ADD CHORE
              </Button>
              <br />
              <div className={visible} onHide={handleHide} animation={false}>
                <Form.Select
                  name="choreName"
                  value={formState.choreName}
                  onChange={handleChange}
                  aria-label="Default select example"
                >
                  <option>Select a chore</option>
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
                <Button variant="primary" onClick={handleAddChore}>
                  Save Chore
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={8}>
            <div className="chores">
              {/* Display today's chores */}
              {loading ? <h3>Loading...</h3> : <h3>Due Today</h3>}
              {allChores &&
                (todayChores().length > 0 ? (
                  <Chores chores={todayChores()} handleOpen={handleOpen} />
                ) : (
                  <p>You've completed all of today's chores. Nice!</p>
                ))}

              {/* Display chores due later */}
              {loading ? <h3>Loading...</h3> : <h3>Due Later</h3>}
              {allChores && laterChores().length > 0 ? (
                <Chores chores={laterChores()} handleOpen={handleOpen} />
              ) : (
                <p>You haven't set any chores for the future yet.</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Chorepage;

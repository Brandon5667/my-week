import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Button } from "react-bootstrap";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";
import { GET_ME } from "../utils/queries";
import { UPDATE_CHORE } from "../utils/mutations";

export default function AddChoreModal({ open, handleClose, selectedChore }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { _id, choreName, day, time } = selectedChore;

  const [formState, setFormState] = useState({
    choreName: "",
    time: "",
    day: "",
  });

  useEffect(() => {
    setFormState({
      choreName: choreName,
      time: time,
      day: day,
    });
  }, [open]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const timeOptions = [];
  for (var i = 1; i < 25; i++) {
    if (i === time) {
      timeOptions.push(
        <option key={i} value={i} selected>
          {i < 13 ? i : i - 12}
          {i < 12 || i == 24 ? "am" : "pm"}
        </option>
      );
    } else {
      timeOptions.push(
        <option key={i} value={i}>
          {i < 13 ? i : i - 12}
          {i < 12 || i == 24 ? "am" : "pm"}
        </option>
      );
    }
  }

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dayOptions = [];
  days.forEach((weekday, index) => {
    if (day - 1 === index) {
      dayOptions.push(
        <option key={index + 1} value={index + 1} selected>
          {weekday}
        </option>
      );
    } else {
      dayOptions.push(
        <option key={index + 1} value={index + 1}>
          {weekday}
        </option>
      );
    }
  });

  const [updateChore, { error }] = useMutation(UPDATE_CHORE, {
    refetchQueries: [{ query: GET_ME }],
  });

  const handleUpdate = async (event) => {
    console.log(formState);
    event.preventDefault();

    try {
      const { data } = await updateChore({
        variables: {
          choreId: _id,
          choreName: formState.choreName,
          time: formState.time * 1,
          day: formState.day * 1,
        },
      });
      // handleClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form>
            <h4 className="mb-3">Update Chore</h4>
            <Form.Group>
              <Form.Label>Chore name:</Form.Label>
              <Form.Control
                name="choreName"
                value={formState.choreName}
                onChange={handleChange}
                aria-label="Default select example"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Time:</Form.Label>
              <Form.Select
                name="time"
                value={formState.time}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Select a time</option>
                {timeOptions}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Day:</Form.Label>
              <Form.Select
                name="day"
                value={formState.day}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Select a day</option>
                {dayOptions}
              </Form.Select>
            </Form.Group>
            <Button variant="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Form>
        </Box>
      </Modal>
    </>
  );
}

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Card, Button } from "react-bootstrap";
import { GET_ME } from "../utils/queries";
import { COMPLETE_CHORE, DELETE_CHORE } from "../utils/mutations";

const Chores = ({ chores, handleOpen }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

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

  const [deleteChore, { error: deleteChoreError }] = useMutation(DELETE_CHORE, {
    refetchQueries: [{ query: GET_ME }],
  });

  const handleDeleteChore = async (choreId) => {
    try {
      const { data } = await deleteChore({ variables: { choreId } });
    } catch (err) {
      console.log(err);
    }
  };

  return chores.map((chore) => {
    return (
      <Card key={chore._id}>
        <Card.Header>{chore.choreName}</Card.Header>
        <Card.Body>
          {days[chore.day - 1]} at{" "}
          {chore.time < 13 ? chore.time : chore.time - 12}
          {chore.time < 12 || chore.time == 24 ? "am" : "pm"}
          <div className="chore-buttons">
            <Button
              variant="warning"
              size="sm"
              onClick={() => handleOpen(chore)}
            >
              Update
            </Button>
            <Button
              variant="success"
              size="sm"
              onClick={() => handleCompleteChore(chore._id)}
            >
              Complete
            </Button>
            <Button
              variant="success"
              size="sm"
              onClick={() => handleDeleteChore(chore._id)}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  });
};

export default Chores;

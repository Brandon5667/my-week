import React, {useState} from "react";
import { Form, Button } from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { ADD_SURVEY } from "../utils/mutations";

const Survey = () => {

  const [formState, setFormState] = useState({
    trash:"",
    dishes:"",
    bathroom:"",
    walk:"",
    floor:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: parseInt(value),
    });
  };

  const [addSurvey, { error, data }] = useMutation(ADD_SURVEY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addSurvey({
        variables: { ...formState },
      });
      window.location.assign('/');

      
    } catch (e) {
      console.error(e);
    }
  };

  

  return (
    <div id="survey-page">
      <img id="survey-raccoon" src="./raccoon-washing.png" alt="Girl in a jacket" width="200" height="240"></img>
      <img id="survey-raccoon-trash" src="./raccoon-trash.png" alt="Girl in a jacket" width="200" height="240"></img>
      <h1>Please Rate the  Following Chores</h1>
      
      <Form id="survey-form" onSubmit={handleFormSubmit}>
        <h2>Taking out the trash.</h2>
        <Form.Select name="trash" value={formState.trash} onChange={handleChange} id="chore-1" aria-label="Default select example">
          
          <option value="1">1 Ezy Pezy</option>
          <option value="2">2 Alright, alright!</option>
          <option value="3">3 Indifferent</option>
          <option value="4">4 Sucks</option>
          <option value="5">5 Really Sucks</option>
        </Form.Select>
        <h2>Washing the dishes.</h2>
        <Form.Select name="dishes" value={formState.dishes} onChange={handleChange} id="chore-2" aria-label="Default select example">
          <option value="1">1 Ezy Pezy</option>
          <option value="2">2 Alright, alright!</option>
          <option value="3">3 Indifferent</option>
          <option value="4">4 Sucks</option>
          <option value="5">5 Really Sucks</option>
        </Form.Select>
        <h2>Cleaning the bathroom.</h2>
        <Form.Select name="bathroom" value={formState.bathroom} onChange={handleChange} id="chore-3" aria-label="Default select example">
          <option value="1">1 Ezy Pezy</option>
          <option value="2">2 Alright, alright!</option>
          <option value="3">3 Indifferent</option>
          <option value="4">4 Sucks</option>
          <option value="5">5 Really Sucks</option>
        </Form.Select>
        <h2>Taking a walk.</h2>
        <Form.Select name="walk" value={formState.walk} onChange={handleChange} id="chore-4" aria-label="Default select example">
          <option value="1">1 Ezy Pezy</option>
          <option value="2">2 Alright, alright!</option>
          <option value="3">3 Indifferent</option>
          <option value="4">4 Sucks</option>
          <option value="5">5 Really Sucks</option>
        </Form.Select>
        <h2>Cleaning the floor.</h2>
        <Form.Select name="floor" value={formState.floor} onChange={handleChange} id="chore-5" aria-label="Default select example">
          <option value="1">1 Ezy Pezy</option>
          <option value="2">2 Alright, alright!</option>
          <option value="3">3 Indifferent</option>
          <option value="4">4 Sucks</option>
          <option value="5">5 Really Sucks</option>
        </Form.Select>
        <br />
        <Button id="survey-submit-button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Survey;
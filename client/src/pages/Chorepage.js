import React, { useState } from "react";
import ChoreBlock from '../components/ChoreBlock';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { Dropdown, Card, ButtonGroup, Button, Modal, Form } from 'react-bootstrap';
import { GET_ME } from '../utils/queries';
import { GET_CHORES } from '../utils/queries';
import { ADD_CHORE } from '../utils/mutations';
import { COMPLETE_CHORE } from '../utils/mutations';
// import ChorePopup from '../components/ChorePopup';
//sort by time

const Chorepage = () => {
    console.log();

    // const { loading, data } = useQuery(GET_CHORES);
    // const chores = data?.chores || [];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formState, setFormState] = useState({
        choreName: "",
        time: "",
        // day: ""
    });

    const handleComplete = async (event) => {
        
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: (value),
        });
    };

    const [addChore, { error, data }] = useMutation(ADD_CHORE);


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addChore({
                variables: { ...formState, score: 1,  },

            });
            console.log(formState);
            setShow(false)
            

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
                    <Button type="submit" onClick={handleShow}>ADD CHORE</Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Form.Select name="choreName" value={formState.choreName} onChange={handleChange} aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="Trash">Trash</option>
                                <option value="Dishes">Dishes</option>
                                <option value="Bathroom">Bathroom</option>
                                <option value="Walk">Walk</option>
                                <option value="Floor">Floor</option>
                            </Form.Select>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Select name="time" value={formState.time} onChange={handleChange} aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">1 am</option>
                                <option value="2">2 am</option>
                                <option value="3">3 am</option>
                                <option value="4">4 am</option>
                                <option value="5">5 am</option>
                                <option value="6">6 am</option>
                                <option value="7">7 am</option>
                                <option value="8">8 am</option>
                                <option value="9">9 am</option>
                                <option value="10">10 am</option>
                                <option value="11">11 am</option>
                                <option value="12">12 am</option>
                                <option value="13">1 pm</option>
                                <option value="14">2 pm</option>
                                <option value="15">3 pm</option>
                                <option value="16">4 pm</option>
                                <option value="17">5 pm</option>
                                <option value="18">6 pm</option>
                                <option value="19">7 pm</option>
                                <option value="20">8 pm</option>
                                <option value="21">9 pm</option>
                                <option value="22">10 pm</option>
                                <option value="23">11 pm</option>
                                <option value="24">12 pm</option>
                            </Form.Select>
                            <Form.Select name="day" value={formState.day} onChange={handleChange} aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">Monday</option>
                                <option value="2">Tuesday</option>
                                <option value="3">Wednesday</option>
                                <option value="4">Tuesday</option>
                                <option value="5">Friday</option>
                                <option value="6">Saturday</option>
                                <option value="7">Sunday</option>
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
      <h1>All Chores</h1>
      {data.chores.map((chore) => (
        <div key={chore.id}>
          <h2>{chore.choreName}</h2>
          <p>{chore.time}</p>
          <Button onClick={handleComplete}>Complete</Button>
        </div>
      ))}
    </div>

            {/* <div className="col-12 col-md-8 mb-3">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <ChoreBlock chores={chores} />
                )}
            </div> */}
        </div>
    )
};

export default Chorepage;
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ADD_CHORE } from '../utils/mutations';

function ChorePopup() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [addChore, { error, data }] = useMutation(ADD_CHORE);

    const [formState, setFormState] = useState({
        choreName: "",
        time: "",
        day: ""
      });

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: (value),
        });
      };

    return (
        <>
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
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ChorePopup;
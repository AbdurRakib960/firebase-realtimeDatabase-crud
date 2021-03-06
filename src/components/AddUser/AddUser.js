import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase';

const AddUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const history = useHistory();
    // handle add user user
    const handleUserNameSubmit = (e) => {
        e.preventDefault();
        const fireStore = firebase.database().ref('/UserInfo');
        const data = {
            FirstName: firstName,
            LastName: lastName,
        };
        fireStore.push(data);
        history.push('/');
    };
    return (
        <Card>
            <Card.Body>
                <h3 className="text-center text-primary mb-3">Add User Name</h3>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            placeholder="First Name..."
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            placeholder="Last Name ..."
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Button variant="primary" type="submit" onClick={handleUserNameSubmit}>
                            Add
                        </Button>
                        <Button
                            onClick={() => {
                                history.push('/');
                            }}
                            variant="primary"
                        >
                            Back
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddUser;

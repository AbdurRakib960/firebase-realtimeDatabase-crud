import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase';

const Update = (props) => {
    const data = props;
    const userData = data.location.state;
    const userInformation = userData.data;
    const [updateFirstName, setUpdateFirstName] = useState(userInformation.FirstName);
    const [updateLastName, setUpdateLastName] = useState(userInformation.LastName);
    const history = useHistory();

    // update user information
    const handleUpdateUser = () => {
        const fireStore = firebase.database().ref('/UserInfo').child(userInformation.id);
        fireStore.update({
            FirstName: updateFirstName,
            LastName: updateLastName,
        });
        setUpdateFirstName('');
        setUpdateLastName('');
        history.push('/');
    };
    return (
        <Card>
            <Card.Body>
                <h3 className="text-center text-primary mb-3">Update User Name</h3>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            placeholder="First Name..."
                            value={updateFirstName}
                            onChange={(e) => setUpdateFirstName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            placeholder="Last Name ..."
                            value={updateLastName}
                            onChange={(e) => setUpdateLastName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={() => {
                                handleUpdateUser();
                            }}
                        >
                            Update
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

export default Update;

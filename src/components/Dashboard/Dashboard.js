import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const fireStore = firebase.database().ref('/UserInfo');
        fireStore.on('value', (userData) => {
            const userInfo = [];
            const data = userData.val();

            if (data) {
                Object.entries(data).forEach((e) => {
                    userInfo.push({
                        id: e[0],
                        FirstName: e[1].FirstName,
                        LastName: e[1].LastName,
                    });
                });
            } else {
                Object.keys({ key: 'value' });
                if (window.UndefinedVariable) {
                    Object.assign(window.UndefinedVariable, {});
                }
            }
            setUsers(userInfo);
        });
    }, []);
    console.log(users);
    return (
        <>
            {users.length === 0 ? (
                <Card>
                    <Container>
                        <Card.Body>
                            <Alert variant="danger">
                                Ops ! There is no user found! please add users !
                            </Alert>
                            <Button
                                onClick={() => history.push('/addUser')}
                                className="btn btn-primary w-100"
                            >
                                Add user
                            </Button>
                        </Card.Body>
                    </Container>
                </Card>
            ) : (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Update/delete</th>
                        </tr>
                    </thead>
                    {users.map((user) => (
                        <tbody>
                            <tr>
                                <td>{user.FirstName}</td>
                                <td>{user.LastName}</td>
                                <td className="d-flex justify-content-between">
                                    <Button variant="primary"> update </Button>
                                    <Button variant="danger">delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            )}
        </>
    );
};

export default Dashboard;

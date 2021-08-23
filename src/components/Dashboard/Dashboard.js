import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
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

    const handleDelete = (id) => {
        const fireStore = firebase.database().ref('/UserInfo').child(id);
        fireStore.remove();
    };
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
                    {users.map((UserData) => (
                        <tbody>
                            <tr>
                                <td>{UserData.FirstName}</td>
                                <td>{UserData.LastName}</td>
                                <td className="d-flex justify-content-between">
                                    <Link
                                        className="btn btn-primary"
                                        to={{ pathname: '/update', state: { data: UserData } }}
                                    >
                                        Update
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            handleDelete(UserData.id);
                                        }}
                                    >
                                        delete
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            )}
            <Button onClick={() => history.push('/addUser')} className="btn btn-success">
                Add User
            </Button>
        </>
    );
};

export default Dashboard;

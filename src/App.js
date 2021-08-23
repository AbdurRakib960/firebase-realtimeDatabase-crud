import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
    return (
        <>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: '100vh' }}
            >
                <div className="w-100" style={{ maxWidth: '450px' }}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/addUser" component={AddUser} />
                        </Switch>
                    </Router>
                </div>
            </Container>
        </>
    );
}

export default App;

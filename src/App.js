import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Dashboard from './components/Dashboard/Dashboard';
import Update from './components/Update/Update';

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
                            <Route path="/update" component={Update} />
                        </Switch>
                    </Router>
                </div>
            </Container>
        </>
    );
}

export default App;

import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import '../Styles/App.css';

const MainPageComponent = () => (
    <div className="App">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">PC Empire</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Top Rated</Nav.Link>
                <Nav.Link href="#features">My Builds</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
            <Nav>
                <Nav.Link href="#login">Login/Register</Nav.Link>
            </Nav>
        </Navbar>
    </div>
)

export default MainPageComponent;

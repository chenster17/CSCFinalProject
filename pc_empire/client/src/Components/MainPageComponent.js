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
        <section id="info">
            <section className="infoBox" id="infoBox1">
                <p>Option 1 text</p>
                <button className="infoButton">Search Pre-Built Computers</button>
            </section>
            <section className="infoBox" id="infoBox2">
                <p>Option 2 text</p>
                <button className="infoButton">Start Custom Build</button>
            </section>
            <section className="infoBox" id="infoBox3">
                <p>Option 3 text</p>
                <button className="infoButton">Browse User Builds</button>
            </section>
        </section>
    </div>
)

export default MainPageComponent;

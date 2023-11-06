import React from 'react';
import { Navbar, Container, Nav, Carousel } from 'react-bootstrap';
import './Home.css'; // Import the CSS file

function Footer() {
    return (
        <footer className="footer bg-dark text-light text-center py-3">
            <div className="container">
                <p>&copy; 2023 Your Website Name</p>
            </div>
        </footer>
    );
}

function Home() {
    return (
        <div>
            <Navbar className="navbar" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Your Website</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="your-image1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Slide 1</h3>
                        <p>Description for Slide 1.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* ... (other carousel items) ... */}
            </Carousel>

            <Footer />
        </div>
    );
}

export default Home;

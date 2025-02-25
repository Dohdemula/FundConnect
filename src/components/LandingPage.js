import React from "react";
import { Container, Navbar, Nav, Button, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css"; // Use a single CSS file for styling

const LandingPage = () => {
  return (
    <>
      <div className="navbar-background"> {/* Wrapper div for background */}
        <Navbar bg="primary" variant="dark" expand="lg" className="px-4">
          <Navbar.Brand href="#">Jumuiya Pay</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
        <h1 className="text-primary fw-bold">Jumuiya Pay</h1>
        <p className="text-muted mt-3">
          Empowering chama groups with seamless financial services and efficient contribution management.
        </p>
        <Button variant="primary" className="mt-4">Get Started</Button>
      </Container>

      <Container id="about" className="my-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image src="/about-us.jpg" alt="About Us" fluid rounded />
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h2 className="text-primary">About Us</h2>
            <h4 className="text-muted">Strengthening communities, one chama at a time</h4>
            <div className="t-divider my-3"></div>
            <p className="text-muted">
              We empower chamas with the tools they need to manage their finances effectively and achieve their goals.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-5 text-center">
        <h2>Effortless Chama Management</h2>
        <p className="text-muted">
          Simplify your chama's financial journey with our intuitive platform. Track contributions, 
          automated record-keeping, and streamline operations with ease.
        </p>
      </Container>

      <Container id="services" className="my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row className="align-items-center mb-4">
          <Col md={6} className="text-center">
            <Image src="/digital-wallet.jpg" alt="Digital Wallet" fluid rounded />
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h3>Digital Wallet</h3>
            <p>Manage your chama contributions and withdrawals easily.</p>
          </Col>
        </Row>
        <Row className="align-items-center mb-4 flex-md-row-reverse">
          <Col md={6} className="text-center">
            <Image src="/group-savings.jpg" alt="Group Savings" fluid rounded />
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h3>Group Savings</h3>
            <p>Save collectively and achieve financial goals faster.</p>
          </Col>
        </Row>
        <Row className="align-items-center mb-4">
          <Col md={6} className="text-center">
            <Image src="/investment.jpg" alt="Investment Opportunities" fluid rounded />
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h3>Investment Opportunities</h3>
            <p>Grow your funds with safe and profitable investments.</p>
          </Col>
        </Row>
      </Container>

      <Container id="features" className="my-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row>
          <Col md={4} className="mb-4">
            <h4>Automated Transactions</h4>
            <p>Effortlessly manage contributions and payouts with our automated system, saving you time and reducing errors.</p>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Transparent Reporting</h4>
            <p>Gain complete visibility into your chama's finances with detailed reports and real-time updates.</p>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Secure Platform</h4>
            <p>Rest assured that your chama's funds are safe and secure with our robust security measures.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <h4>Customizable Settings</h4>
            <p>Tailor your chama's experience to your specific needs with flexible settings for contribution amounts and more.</p>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Multi-Channel Payment Integration</h4>
            <p>Direct integration with Mpesa and bank accounts for automated transaction recording.</p>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Dedicated Support</h4>
            <p>Our friendly and knowledgeable support team is always available to answer your questions and provide assistance.</p>
          </Col>
        </Row>
      </Container>

      <Container id="contact" className="my-5 text-center">
        <h2>Contact Us</h2>
        <p className="text-muted">
          Have questions? Our dedicated team is ready to assist you. Connect with us for support, information, or to discuss how our platform can elevate your chama's financial journey.
        </p>
        <a href="mailto:support@jumuiyapay.com" className="text-primary fs-3">
          <i className="bi bi-envelope-fill"></i>
        </a>
      </Container>
    </>
  );
};

export default LandingPage;



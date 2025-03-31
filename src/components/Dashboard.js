import React from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!", { position: "bottom-center" });
      navigate("/login");
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body className="text-center">
              <h1 className="mb-4">Welcome to Your Dashboard</h1>
              <p className="lead mb-4">
                You're successfully authenticated and can now access protected content.
              </p>
              <div className="d-grid gap-3">
                <Button variant="primary" size="lg">
                  View Profile
                </Button>
                <Button variant="secondary" size="lg">
                  Account Settings
                </Button>
                <Button 
                  variant="danger" 
                  size="lg" 
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
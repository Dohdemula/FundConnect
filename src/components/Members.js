import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import Sidebar from './Sidebar';
import './AdminDashboard.css';

const Members = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample data - in a real app, you would use setMembers to update this
  const members = [
    { 
      id: '001', 
      name: 'Raphael Mutill', 
      email: 'raphael@example.com', 
      phone: '0712345678', 
      joinDate: '05/12/2023', 
      status: 'active' 
    }
  ];

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const handleLogout = () => navigate('/');

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div style={{ 
        flex: 1, 
        padding: '20px',
        backgroundColor: darkMode ? '#111122' : '#ffffff'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '20px' 
          }}>
          <h1 style={{ color: darkMode ? '#e1e1e1' : '#333' }}>
            Members Management
          </h1>
          <Button 
           variant={darkMode ? 'outline-danger' : 'danger'} 
            onClick={handleLogout}
          >
           Logout
          </Button>
        </div>

        <Button 
          variant={darkMode ? 'outline-success' : 'success'}
          onClick={() => setShowAddModal(true)}
          style={{ marginBottom: '20px' }}
        >
          Add Member
        </Button>

        <Table striped bordered hover variant={darkMode ? 'dark' : 'light'}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Join Date</th>
              <th>Status</th>
            </tr>
          </thead>
        <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.joinDate}</td>
                <td>
                  <span className={`badge bg-${member.status === 'active' ? 'success' : 'warning'}`}>
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* Form fields would go here */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
              Close
            </Button>
            <Button variant="primary">
              Save Member
            </Button>
           </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Members;

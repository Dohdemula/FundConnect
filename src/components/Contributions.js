import React, { useState } from 'react';
import { Table, Button, Form, Modal, Alert, Card, Badge, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Contributions = ({ darkMode }) => {
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [contributions, setContributions] = useState([
    { 
      id: 1, 
      member: 'John Doe', 
      type: 'Monthly', 
      amount: 5000, 
      date: '2023-06-15', 
      paymentMethod: 'Mpesa', 
      reference: 'MPESA123', 
      status: 'Verified' 
    },
    { 
      id: 2, 
      member: 'Jane Smith', 
      type: 'Event', 
      amount: 2000, 
      date: '2023-06-10', 
      paymentMethod: 'Bank', 
      reference: 'BNK456', 
      status: 'Pending' 
    },
    { 
      id: 3, 
      member: 'Mike Johnson', 
      type: 'Donation', 
      amount: 10000, 
      date: '2023-06-05', 
      paymentMethod: 'Mpesa', 
      reference: 'MPESA789', 
      status: 'Verified' 
    }
  ]);
  
  const [newContribution, setNewContribution] = useState({
    member: '',
    type: 'Monthly',
    amount: 0,
    date: new Date().toISOString().split('T')[0],
    paymentMethod: 'Mpesa',
    reference: '',
    status: 'Pending'
  });
  
  const [error, setError] = useState('');

  const handleAddContribution = () => {
    if (!newContribution.member || !newContribution.amount || !newContribution.reference) {
      setError('Please fill in all required fields');
      return;
    }

    setContributions([...contributions, { 
      ...newContribution, 
      id: contributions.length + 1,
      amount: parseFloat(newContribution.amount)
    }]);
    
    setShowAddModal(false);
    setNewContribution({
      member: '',
      type: 'Monthly',
      amount: 0,
      date: new Date().toISOString().split('T')[0],
      paymentMethod: 'Mpesa',
      reference: '',
      status: 'Pending'
    });
    setError('');
  };

  const statusVariant = (status) => {
    switch(status) {
      case 'Verified': return 'success';
      case 'Pending': return 'warning';
      case 'Rejected': return 'danger';
      default: return 'secondary';
    }
  };

  const colors = {
    cardBg: darkMode ? '#1e1e2d' : '#ffffff',
    cardText: darkMode ? '#e1e1e1' : '#333',
    tableHeaderBg: darkMode ? '#222233' : '#f8f9fa',
    tableBorder: darkMode ? '#444' : '#dee2e6',
    tableStripedBg: darkMode ? '#2a2a3a' : '#f9f9f9',
    mainBg: darkMode ? '#111122' : '#f8f9fa'
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar Component */}
      <Sidebar darkMode={darkMode} />
      
      {/* Main Content Area */}
      <div style={{ 
        flex: 1, 
        padding: '20px',
        backgroundColor: colors.mainBg,
        backgroundImage: darkMode 
          ? 'radial-gradient(circle at 80% 10%, rgba(33, 33, 60, 0.8) 0%, rgba(22, 22, 36, 0.2) 100%)' 
          : 'radial-gradient(circle at 80% 10%, rgba(54, 135, 90, 0.15) 0%, rgba(240, 255, 244, 0.05) 100%)',
        backgroundAttachment: 'fixed'
      }}>
        <Card style={{ 
          backgroundColor: colors.cardBg,
          color: colors.cardText,
          marginBottom: '20px',
          border: 'none',
          boxShadow: darkMode ? '0 5px 15px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.08)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative elements */}
          <div style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: darkMode 
              ? 'linear-gradient(135deg, rgba(66, 99, 235, 0.1), rgba(33, 33, 60, 0.1))' 
              : 'linear-gradient(135deg, rgba(54, 135, 90, 0.1), rgba(240, 255, 244, 0.1))',
            zIndex: 0,
            pointerEvents: 'none'
          }}></div>
          
          <Card.Body style={{ position: 'relative', zIndex: 1 }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 style={{ margin: 0, color: colors.cardText }}>Contributions Management</h2>
              <Button 
                variant={darkMode ? "outline-primary" : "primary"}
                onClick={() => setShowAddModal(true)}
              >
                Record Contribution
              </Button>
            </div>

            <Table 
              striped 
              bordered 
              hover 
              responsive 
              style={{
                backgroundColor: darkMode ? 'rgba(24, 24, 36, 0.6)' : 'white',
                color: colors.cardText,
                borderColor: colors.tableBorder,
                boxShadow: darkMode ? '0 5px 15px rgba(0,0,0,0.15)' : '0 5px 15px rgba(0,0,0,0.05)',
                borderRadius: '8px'
              }}
            >
              <thead style={{ backgroundColor: colors.tableHeaderBg }}>
                <tr>
                  <th>ID</th>
                  <th>Member</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Payment Method</th>
                  <th>Reference</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contributions.map((contribution) => (
                  <tr key={contribution.id} style={{ 
                    backgroundColor: darkMode 
                      ? (contribution.id % 2 === 0 ? 'rgba(40, 40, 60, 0.4)' : 'rgba(30, 30, 45, 0.6)') 
                      : (contribution.id % 2 === 0 ? 'rgba(249, 249, 249, 0.8)' : 'rgba(255, 255, 255, 0.9)')
                  }}>
                    <td>{contribution.id}</td>
                    <td>{contribution.member}</td>
                    <td>{contribution.type}</td>
                    <td>Ksh {contribution.amount.toLocaleString()}</td>
                    <td>{contribution.date}</td>
                    <td>{contribution.paymentMethod}</td>
                    <td>{contribution.reference}</td>
                    <td>
                      <Badge bg={statusVariant(contribution.status)}>
                        {contribution.status}
                      </Badge>
                    </td>
                    <td>
                      <Button 
                        variant={darkMode ? "outline-info" : "info"} 
                        size="sm" 
                        className="me-2"
                      >
                        Verify
                      </Button>
                      <Button 
                        variant={darkMode ? "outline-danger" : "danger"} 
                        size="sm"
                      >
                        Reject
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* Add Contribution Modal */}
        <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
          <Modal.Header 
            closeButton 
            className={darkMode ? "bg-dark text-light" : ""}
            closeVariant={darkMode ? "white" : undefined}
          >
            <Modal.Title>Record New Contribution</Modal.Title>
          </Modal.Header>
          <Modal.Body className={darkMode ? "bg-dark text-light" : ""}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Member Name</Form.Label>
                <Form.Control
                  type="text"
                  value={newContribution.member}
                  onChange={(e) => setNewContribution({...newContribution, member: e.target.value})}
                  className={darkMode ? "bg-dark text-light" : ""}
                  placeholder="Enter member name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contribution Type</Form.Label>
                <Form.Select
                  value={newContribution.type}
                  onChange={(e) => setNewContribution({...newContribution, type: e.target.value})}
                  className={darkMode ? "bg-dark text-light" : ""}
                >
                  <option value="Monthly">Monthly</option>
                  <option value="Event">Event</option>
                  <option value="Donation">Donation</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Amount (Ksh)</Form.Label>
                <Form.Control
                  type="number"
                  value={newContribution.amount}
                  onChange={(e) => setNewContribution({...newContribution, amount: e.target.value})}
                  className={darkMode ? "bg-dark text-light" : ""}
                  min="0"
                  step="100"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newContribution.date}
                  onChange={(e) => setNewContribution({...newContribution, date: e.target.value})}
                  className={darkMode ? "bg-dark text-light" : ""}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Payment Method</Form.Label>
                <Form.Select
                  value={newContribution.paymentMethod}
                  onChange={(e) => setNewContribution({...newContribution, paymentMethod: e.target.value})}
                  className={darkMode ? "bg-dark text-light" : ""}
                >
                  <option value="Mpesa">Mpesa</option>
                  <option value="Bank">Bank Transfer</option>
                  <option value="Cash">Cash</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Reference Number</Form.Label>
                <Form.Control
                  type="text"
                  value={newContribution.reference}
                  onChange={(e) => setNewContribution({...newContribution, reference: e.target.value})}
                  className={darkMode ? "bg-dark text-light" : ""}
                  placeholder="e.g. MPESA123, BNK456"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className={darkMode ? "bg-dark text-light" : ""}>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddContribution}>
              Save Contribution
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Contributions;
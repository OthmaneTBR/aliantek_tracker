import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import './AdminDashboard.css';

const ManageEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ name: '', email: '', role: '', password: '' });
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/employees', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleShow = () => {
    setIsUpdating(false);
    setNewEmployee({ name: '', email: '', role: '', password: '' });
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/employees', newEmployee, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchEmployees();
      setShow(false);
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/employees/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleUpdate = async (id) => {
    const employeeToUpdate = employees.find((employee) => employee._id === id);
    if (!employeeToUpdate) return;

    setNewEmployee({ ...employeeToUpdate, password: '' });
    setIsUpdating(true);
    setShow(true);
  };

  const handleSaveUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`/api/employees/${newEmployee._id}`, newEmployee, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchEmployees();
      setShow(false);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div>
      <h2>Manage Employees</h2>
      <Button variant="primary" onClick={handleShow}>Add Employee</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
              <td>
                <Button variant="warning" onClick={() => handleUpdate(employee._id)}>Update</Button>
                <Button variant="danger" onClick={() => handleDelete(employee._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isUpdating ? 'Update Employee' : 'Add Employee'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={newEmployee.email} onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Enter role" value={newEmployee.role} onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={newEmployee.password} onChange={(e) => setNewEmployee({ ...newEmployee, password: e.target.value })} />
            </Form.Group>
            <Button variant="primary" onClick={isUpdating ? handleSaveUpdate : handleSave}>
              {isUpdating ? 'Update' : 'Save'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManageEmployees;
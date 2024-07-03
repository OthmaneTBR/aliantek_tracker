import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import './ManageEmployees.css';

const ManageEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ name: '', email: '', role: '', password: '' });

  useEffect(() => {
    // Fetch employees from the server
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    // Save new employee to the server
    setShow(false);
  };

  const handleDelete = (id) => {
    // Delete employee by id
  };

  const handleUpdate = (id) => {
    // Update employee by id
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
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
              <td>
                <Button variant="warning" onClick={() => handleUpdate(employee.id)}>Update</Button>
                <Button variant="danger" onClick={() => handleDelete(employee.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
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
            <Button variant="primary" onClick={handleSave}>Save</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManageEmployees;

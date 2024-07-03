import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import './ManageProjects.css';

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', client: '', tasks: [] });

  useEffect(() => {
    // Fetch projects from the server
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    // Save new project to the server
    setShow(false);
  };

  const handleDelete = (id) => {
    // Delete project by id
  };

  const handleUpdate = (id) => {
    // Update project by id
  };

  return (
    <div>
      <h2>Manage Projects</h2>
      <Button variant="primary" onClick={handleShow}>Add Project</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Client</th>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.client}</td>
              <td>{project.tasks.length}</td>
              <td>
                <Button variant="warning" onClick={() => handleUpdate(project.id)}>Update</Button>
                <Button variant="danger" onClick={() => handleDelete(project.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formClient">
              <Form.Label>Client</Form.Label>
              <Form.Control type="text" placeholder="Enter client" value={newProject.client} onChange={(e) => setNewProject({ ...newProject, client: e.target.value })} />
            </Form.Group>
            {/* Add more fields for tasks if needed */}
            <Button variant="primary" onClick={handleSave}>Save</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManageProjects;

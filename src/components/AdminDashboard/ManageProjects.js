import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import './AdminDashboard.css';

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', client: '', description: '', startDate: '', endDate: '', status: 'Not Started' });
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/projects', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleShow = () => {
    setIsUpdating(false);
    setNewProject({ title: '', client: '', description: '', startDate: '', endDate: '', status: 'Not Started' });
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/projects', newProject, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchProjects();
      setShow(false);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleUpdate = async (id) => {
    const projectToUpdate = projects.find((project) => project._id === id);
    if (!projectToUpdate) return;

    setNewProject({ ...projectToUpdate });
    setIsUpdating(true);
    setShow(true);
  };

  const handleSaveUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`/api/projects/${newProject._id}`, newProject, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchProjects();
      setShow(false);
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const handleViewTasks = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSelectedProject(response.data);
      setShow(true);
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
  };

  return (
    <div>
      <h2>Manage Projects</h2>
      <Button variant="primary" onClick={handleShow}>Add Project</Button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Client</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>{project.title}</td>
              <td>{project.client}</td>
              <td>{project.description}</td>
              <td>{new Date(project.startDate).toLocaleDateString()}</td>
              <td>{project.endDate ? new Date(project.endDate).toLocaleDateString() : 'Not set'}</td>
              <td>{project.status}</td>
              <td>
                <Button variant="info" onClick={() => handleViewTasks(project._id)}>View Tasks</Button>
                <Button variant="warning" onClick={() => handleUpdate(project._id)}>Update</Button>
                <Button variant="danger" onClick={() => handleDelete(project._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject ? `Tasks for ${selectedProject.title}` : (isUpdating ? 'Update Project' : 'Add Project')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject ? (
            <ListGroup>
              {selectedProject.tasks.map(task => (
                <ListGroup.Item key={task._id}>
                  <h5>{task.title}</h5>
                  <p>{task.description}</p>
                  <small>Status: {task.status}</small>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formClient">
              <Form.Label>Client</Form.Label>
              <Form.Control type="text" placeholder="Enter client" value={newProject.client} onChange={(e) => setNewProject({ ...newProject, client: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" value={newProject.startDate} onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" value={newProject.endDate} onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" value={newProject.status} onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}>
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={isUpdating ? handleSaveUpdate : handleSave}>
              {isUpdating ? 'Update' : 'Save'}
            </Button>
          </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManageProjects;
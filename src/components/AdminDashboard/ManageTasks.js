import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import './AdminDashboard.css';

const ManageTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    project: '',
    assignedTo: '',
    status: 'To Do'
  });
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetchTasks();
    fetchProjects();
    fetchUsers();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/tasks', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

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

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/employees', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleShow = () => {
    setIsUpdating(false);
    setNewTask({ title: '', description: '', project: '', assignedTo: '', status: 'To Do' });
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/tasks', newTask, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks();
      setShow(false);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdate = async (id) => {
    const taskToUpdate = tasks.find((task) => task._id === id);
    if (!taskToUpdate) return;

    setNewTask({ ...taskToUpdate });
    setIsUpdating(true);
    setShow(true);
  };

  const handleSaveUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`/api/tasks/${newTask._id}`, newTask, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks();
      setShow(false);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>Manage Tasks</h2>
      <Button variant="primary" onClick={handleShow}>Add Task</Button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Project</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.project ? task.project.title : 'N/A'}</td>
              <td>{task.assignedTo ? `${task.assignedTo.name} (${task.assignedTo.email})` : 'Unassigned'}</td>
              <td>{task.status}</td>
              <td>
                <Button variant="warning" onClick={() => handleUpdate(task._id)}>Update</Button>
                <Button variant="danger" onClick={() => handleDelete(task._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isUpdating ? 'Update Task' : 'Add Task'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formProject">
              <Form.Label>Project</Form.Label>
              <Form.Control as="select" value={newTask.project} onChange={(e) => setNewTask({ ...newTask, project: e.target.value })}>
                <option value="">Select a project</option>
                {projects.map((project) => (
                  <option key={project._id} value={project._id}>{project.title}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formAssignedTo">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control as="select" value={newTask.assignedTo} onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}>
                <option value="">Unassigned</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id}>{user.name} ({user.email})</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" value={newTask.status} onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </Form.Control>
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

export default ManageTasks;
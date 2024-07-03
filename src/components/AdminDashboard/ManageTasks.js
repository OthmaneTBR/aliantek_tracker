import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import './ManageTasks.css';

const ManageTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '', projectId: '' });

  useEffect(() => {
    // Fetch tasks from the server
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    // Save new task to the server
    setShow(false);
  };

  const handleDelete = (id) => {
    // Delete task by id
  };

  const handleUpdate = (id) => {
    // Update task by id
  };

  return (
    <div>
      <h2>Manage Tasks</h2>
      <Button variant="primary" onClick={handleShow}>Add Task</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Project ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.projectId}</td>
              <td>
                <Button variant="warning" onClick={() => handleUpdate(task.id)}>Update</Button>
                <Button variant="danger" onClick={() => handleDelete(task.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formProjectId">
              <Form.Label>Project ID</Form.Label>
              <Form.Control type="text" placeholder="Enter project ID" value={newTask.projectId} onChange={(e) => setNewTask({ ...newTask, projectId: e.target.value })} />
            </Form.Group>
            <Button variant="primary" onClick={handleSave}>Save</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManageTasks;

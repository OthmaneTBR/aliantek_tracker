import React, { useState } from 'react';
import { ListGroup, Button, Form, InputGroup } from 'react-bootstrap';

const ProjectDetails = ({ project, onReturnToProjects }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [hours, setHours] = useState('');

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };

  const handleReturn = () => {
    setSelectedTask(null);
  };

  if (selectedTask) {
    return (
      <div>
        <Button variant="secondary" onClick={handleReturn}>
          Retour
        </Button>
        <h4>{selectedTask}</h4>
        <p>Description pour la tache {selectedTask}</p>
        <InputGroup className="mb-3">
          <InputGroup.Text>Heures passées</InputGroup.Text>
          <Form.Control
            type="number"
            value={hours}
            onChange={handleHoursChange}
          />
        </InputGroup>
        <Button variant="primary">Appliquer</Button>
      </div>
    );
  }

  return (
    <div>
      <Button variant="secondary" onClick={onReturnToProjects}>
        Retour
      </Button>
      <h4>{project.title}</h4>
      <p>Client: {project.client}</p>
      <p>{project.details}</p>
      <h5>Taches</h5>
      <ListGroup>
        {project.tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            {task}
            <Button
              variant="success"
              onClick={() => handleTaskClick(task)}
              className="float-right"
            >
              Afficher la tache
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ProjectDetails;

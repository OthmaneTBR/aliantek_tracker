import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const TaskDetails = ({ task, onReturn }) => {
  return (
    <div>
      <Button variant="secondary" onClick={onReturn}>
        Retour
      </Button>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Projet: {task.project}</p>
      <InputGroup className="mb-3">
        <InputGroup.Text>Heures passées</InputGroup.Text>
        <Form.Control type="number" value={task.hoursSpent} readOnly />
      </InputGroup>
    </div>
  );
};

export default TaskDetails;

import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const TaskDetails = ({ task, onReturn }) => {
  return (
    <div>
      <Button variant="secondary" onClick={onReturn}>
        Return to Tasks
      </Button>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Projet: {task.project}</p>
      <InputGroup className="mb-3">
        <InputGroup.Text>Hours Spent</InputGroup.Text>
        <Form.Control type="number" value={task.hoursSpent} readOnly />
      </InputGroup>
    </div>
  );
};

export default TaskDetails;

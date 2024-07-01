import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const ProjectDetails = ({ project }) => {
  const handleTakeTask = (task) => {
    alert(`You have taken the task: ${task}`);
    // Add logic to handle the task assignment to the employee
  };

  return (
    <div>
      <h4>{project.title}</h4>
      <p>Client: {project.client}</p>
      <p>{project.details}</p>
      <h5>Taches</h5>
      <ListGroup>
        {project.tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            {task}
            <Button variant="success" onClick={() => handleTakeTask(task)} className="float-right taskbtn">
              Prenrdre la tache
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ProjectDetails;

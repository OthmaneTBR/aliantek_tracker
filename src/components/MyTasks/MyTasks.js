import React, { useState } from 'react';
import { ListGroup, Button, Offcanvas } from 'react-bootstrap';
import TaskDetails from './TaskDetails'; // Component to show task details

const MyTasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Tache 1',
      project: 'Projet X',
      description: 'Description du tache 1',
      hoursSpent: 2,
    },
    {
      id: 2,
      title: 'Tache 2',
      project: 'Projet Y',
      description: 'Description du tache 2',
      hoursSpent: 3,
    },
  ]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = (task) => {
    setSelectedTask(task);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedTask(null);
  };

  return (
    <div className="my-tasks-container">
      <h2>Mes Tâches</h2>
      <ListGroup>
        {tasks.map((task) => (
          <ListGroup.Item key={task.id}>
            <div className="task-item">
              <div>
                <h5>{task.title}</h5>
                <p>Projet: {task.project}</p>
                <p>Heures passées: {task.hoursSpent}</p>
              </div>
              <Button variant="primary" onClick={() => handleShowDetails(task)}>
                Afficher les détails
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Offcanvas show={showDetails} onHide={handleCloseDetails} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Détails de tache</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedTask && (
            <TaskDetails task={selectedTask} onReturn={handleCloseDetails} />
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MyTasks;

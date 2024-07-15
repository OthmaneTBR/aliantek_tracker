import React, { useState } from 'react';
import { ListGroup, Button, Offcanvas } from 'react-bootstrap';
import ProjectDetails from '../NouveauxProjets/ProjectDetails';
import './MyProjects.css';

const MyProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project X',
      client: 'Client ABC',
      tasksCount: 4,
      tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
      details: 'Detailed information about Project X',
    },
    {
      id: 2,
      title: 'Project Y',
      client: 'Client DEF',
      tasksCount: 6,
      tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'],
      details: 'Detailed information about Project Y',
    },
  ]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = (project) => {
    setSelectedProject(project);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedProject(null);
  };

  return (
    <div className="my-projects-container">
      <h2>Mes Projets</h2>
      <ListGroup>
        {projects.map((project) => (
          <ListGroup.Item key={project.id}>
            <div className="project-item">
              <div>
                <h5>{project.title}</h5>
                <p>Client: {project.client}</p>
                <p>Nombre de taches: {project.tasksCount}</p>
              </div>
              <Button variant="primary" onClick={() => handleShowDetails(project)}>
                Afficher les détails
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Offcanvas show={showDetails} onHide={handleCloseDetails} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Détails de projet</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedProject && (
            <ProjectDetails
              project={selectedProject}
              onReturnToProjects={handleCloseDetails}
            />
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MyProjects;

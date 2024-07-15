import React, { useState } from 'react';
import { ListGroup, Button, Offcanvas } from 'react-bootstrap';
import ProjectDetails from './ProjectDetails';
import './NewProjects.css';

const NewProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Projet A',
      client: 'Client XYZ',
      tasksCount: 5,
      tasks: ['Tache 1', 'Tache 2', 'Tache 3', 'Tache 4', 'Tache 5'],
      details: 'Description du projet A',
    },
    {
      id: 2,
      title: 'Projet B',
      client: 'Client ABC',
      tasksCount: 3,
      tasks: ['Tache 1', 'Tache 2', 'Tache 3'],
      details: 'Description du projet B',
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
    <div className="new-projects-container">
      <h2>Nouveaux Projets</h2>
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
                Afficher les Details
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Offcanvas show={showDetails} onHide={handleCloseDetails} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Details du projet</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedProject && <ProjectDetails project={selectedProject} />}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NewProjects;

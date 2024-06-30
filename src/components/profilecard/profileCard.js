import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './profileCard.css';
import profilePic from './profile-pic.jpeg';

const ProfileCard = ({onSelect}) => {
  return (
    <div className="profile-card-container">
        <Card className="profile-card">
        <div className="profile-pic-container">
          <img src={profilePic} className="profile-pic" alt="Profile" />
        </div>
        <Card.Body className="text-center">
            <Card.Title>Othmane TIBARI</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">@Full stack Web developer</Card.Subtitle>
        </Card.Body>
        <Card.Header className="text-center"><strong>Paramètres</strong></Card.Header>
        <ListGroup variant="flush">
            <ListGroup.Item className="parameter-item" onClick={() => onSelect('Mes informations')}>Mes informations</ListGroup.Item>
            <ListGroup.Item className="parameter-item" onClick={() => onSelect('Nouveaux projets')}>Nouveaux projets</ListGroup.Item>
            <ListGroup.Item className="parameter-item" onClick={() => onSelect('Mes projets')}>Mes projets</ListGroup.Item>
            <ListGroup.Item className="parameter-item" onClick={() => onSelect('Mes tâches')}>Mes tâches</ListGroup.Item>
        </ListGroup>
        </Card>
    </div>
  );
};

export default ProfileCard;

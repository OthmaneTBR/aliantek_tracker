import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

const ProfileDetails = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={8}>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>date d'adhésion: {new Date(user.joinDate).toLocaleDateString()}</p>
            <p>Nombre de Projets: {user.projectsCount}</p>
            <p>Nombre de Completés: {user.tasksCompleted}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProfileDetails;

import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

const ProfileDetails = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={4}>
            <Image src={user.profilePicture} roundedCircle width="100" />
          </Col>
          <Col md={8}>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>Date of Joining: {new Date(user.joinDate).toLocaleDateString()}</p>
            <p>Number of Projects: {user.projectsCount}</p>
            <p>Number of Tasks Completed: {user.tasksCompleted}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProfileDetails;

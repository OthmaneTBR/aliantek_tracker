import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './AdminDashboard.css';

const AdminSidebar = ({ onSelect }) => {
  return (
    <div className="admin-sidebar">
      <ListGroup>
        <ListGroup.Item onClick={() => onSelect('Manage Employees')}>Gérer les employés</ListGroup.Item>
        <ListGroup.Item onClick={() => onSelect('Manage Projects')}>Gérer le projets</ListGroup.Item>
        <ListGroup.Item onClick={() => onSelect('Manage Tasks')}>Gérer les taches</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AdminSidebar;

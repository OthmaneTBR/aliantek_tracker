import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './AdminSidebar.css';

const AdminSidebar = ({ onSelect }) => {
  return (
    <div className="admin-sidebar">
      <ListGroup>
        <ListGroup.Item onClick={() => onSelect('Manage Employees')}>Manage Employees</ListGroup.Item>
        <ListGroup.Item onClick={() => onSelect('Manage Projects')}>Manage Projects</ListGroup.Item>
        <ListGroup.Item onClick={() => onSelect('Manage Tasks')}>Manage Tasks</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AdminSidebar;

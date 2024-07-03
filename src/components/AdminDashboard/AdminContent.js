import React from 'react';
import ManageEmployees from './ManageEmployees';
import ManageProjects from './ManageProjects';
import ManageTasks from './ManageTasks';

const AdminContent = ({ selected }) => {
  const renderContent = () => {
    switch (selected) {
      case 'Manage Employees':
        return <ManageEmployees />;
      case 'Manage Projects':
        return <ManageProjects />;
      case 'Manage Tasks':
        return <ManageTasks />;
      default:
        return <ManageEmployees />;
    }
  };

  return (
    <div className="admin-content">
      {renderContent()}
    </div>
  );
};

export default AdminContent;

import React, { useState } from 'react';
import Headbar from '../components/headbar/Headbar';
import AdminSidebar from './AdminSidebar';
import AdminContent from './AdminContent';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [selected, setSelected] = useState('Manage Employees');

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <div>
      <Headbar />
      <div className="admin-dashboard-container d-flex">
        <AdminSidebar onSelect={handleSelect} />
        <AdminContent selected={selected} />
      </div>
    </div>
  );
};

export default AdminDashboard;

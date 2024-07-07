import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Headbar from './components/headbar/headbar';
import ProfileCard from './components/profilecard/profileCard';
import MainContent from './components/main-content/maincontent';
import AuthPage from './components/AuthPage/AuthPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';


function App() {
  const [selected, setSelected] = useState('Mes informations');

  const handleSelect = (item) => {
    setSelected(item);
  };

  const EmployeeDashboard = () => (
    <div>
      <Headbar />
      <div className="app-container d-flex">
        <ProfileCard className="profile-card-container" onSelect={handleSelect} />
        <MainContent className="main-content" selected={selected} />
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;

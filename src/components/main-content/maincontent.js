import React from 'react';
import ProfileContainer from '../MesInformations/ProfileContainer';
import NewProjects from '../NewProjects/NewProjects';
import MyProjects from '../MyProjects/MyProjects';


// Import other components like NewProjects, Projects, Tasks if they exist

const MainContent = ({ selected }) => {

  const renderContent = () => {
    switch (selected) {
      case 'Mes informations':
        return <ProfileContainer />;
      case 'Nouveaux projets':
        return <NewProjects />;
      case 'Mes projets':
        return <MyProjects />;
      case 'Mes tâches':
        return <div>Mes tâches content</div>;
      default:
        return <ProfileContainer />;
    }
  };

  return (
    <div className="main-content p-3 w-75">
      {renderContent()}
    </div>
  );
};

export default MainContent;
